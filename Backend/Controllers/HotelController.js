/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable no-else-return */
const {
  response, redis, urlParser, uploadHotelImages
} = require('../Utils');
const {
  Hotel, HotelImages, HotelRooms, HotelAmenities, Amenity
} = require('../Services');

const getHotels = async (req, res) => {
  const {
    search, sort, perPage, page
  } = req.query;

  var numRows;
  var numPerPage = parseInt(perPage, 10) || 10;
  var currentPage = parseInt(page, 10) || 1;
  var numPages;
  var skip = (currentPage - 1) * numPerPage;

  await Hotel.getHotelsCount(search, null).then((result) => {
    numRows = result[0].hotelCount;
    numPages = Math.ceil(numRows / numPerPage);
  }).catch((error) => response(res, 200, false, 'Error At Fetching Hotel Count.', error));

  const limit = `${skip},${numPerPage}`;
  const redisKey = `hotel_${encodeURI(urlParser(search, sort, currentPage, numPerPage))}`;

  return redis.get(redisKey, async (ex, data) => {
    if (data) {
      const resultJSON = JSON.parse(data);
      return response(res, 200, true, 'Data Found - Redis Cache', resultJSON);
    }
    else {

      const hotels = await Hotel.getHotels(search, null, limit);
      if (hotels) {

        for (let i = 0; i < hotels.length; i++) {
          // eslint-disable-next-line no-await-in-loop
          const cheapestRoom = await HotelRooms.getCheapestRooms(hotels[i].id);
          hotels[i].cost = cheapestRoom[0].cost;
        }

        for (let i = 0; i < hotels.length; i++) {
          // eslint-disable-next-line no-await-in-loop
          const hotelImages = await HotelImages.getImages(hotels[i].id);
          hotels[i].images = hotelImages;
        }

        const result = {
          hotels
        };

        if (currentPage <= numPages) {
          result.pagination = {
            currentPage,
            recordPerPage: numPerPage,
            prev: currentPage > 1 ? currentPage - 1 : undefined,
            next: currentPage < numPages ? currentPage + 1 : undefined,
            prevLink: currentPage > 1 ? urlParser(search, sort, currentPage - 1, numPerPage) : undefined,
            nextLink: currentPage < numPages ? urlParser(search, sort, currentPage + 1, numPerPage) : undefined
          };
        }
        else {
          result.pagination = {
            err: `queried page ${currentPage} is >= to maximum page number ${numPages}`
          };
        }

        redis.setex(redisKey, 10, JSON.stringify(result));
        return response(res, 200, true, 'Data Found - Database Query', result);
      }
      else {
        return response(res, 200, false, 'Data not Found');
      }
    }
  });
};

const getHotelById = async (req, res) => {
  const { id } = req.params;
  await Hotel.getHotelById(id).then(async (result) => {
    if (result.length > 0) {
      const arr = [];
      await HotelAmenities.getAmenities(id).then(async (_result) => {
        if (_result.length > 0) {
          for (let i = 0; i < _result.length; i++) {
            const hotelAmenity = await Amenity.getAmenityById(_result[i].amenities_id);
            arr.push(hotelAmenity[0]);
          }
        }
        else {
          return response(res, 200, false, 'Amenities Data Not Found.');
        }
      }).catch((error) => response(res, 200, false, 'Error At Fetching Hotel Amenity.', error));
      const hotelImages = await HotelImages.getImages(id);
      result[0].amenities = arr;
      result[0].images = hotelImages;
      return response(res, 200, true, 'Data Found.', result[0]);
    }
    else {
      return response(res, 200, true, 'Data Not Found.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Fetching Hotel Data.', error));
};

const createHotel = async (req, res) => {
  var data = {};
  await uploadHotelImages(req).then(async (result) => {
    data = result;
    await Hotel.createHotel(data).then(async (_result) => {
      if (_result.insertId > 0) {
        await HotelImages.createImages(_result.insertId, data).then(async (__result) => {
          await HotelAmenities.createAmenities(_result.insertId, data.amenities_id).then(async () => {
            await Hotel.getHotelById(_result.insertId).then(async (___result) => {
              if (___result.length > 0) {
                const arr = [];
                await HotelAmenities.getAmenities(_result.insertId).then(async (____result) => {
                  if (____result.length > 0) {
                    // eslint-disable-next-line no-plusplus
                    for (let j = 0; j < ____result.length; j++) {
                      // eslint-disable-next-line no-await-in-loop
                      const hotelAmenity = await Amenity.getAmenityById(____result[j].amenities_id);
                      arr.push(hotelAmenity[0]);
                    }
                  }
                  else {
                    return response(res, 200, false, 'Amenities Data Not Found.');
                  }
                }).catch((error) => response(res, 200, false, 'Error At Fetching Hotel Amenity.', error));
                const hotelImages = await HotelImages.getImages(_result.insertId);
                ___result[0].amenities = arr;
                ___result[0].images = hotelImages;
                return response(res, 200, true, 'Data Found.', ___result[0]);
              }
              else {
                return response(res, 200, true, 'Data Not Found.');
              }
            }).catch((error) => response(res, 200, false, 'Error At Fetching Hotel.', error));
          }).catch((error) => response(res, 200, false, 'Error At Creating Amenities.', error));
        }).catch((error) => response(res, 200, false, 'Error At Uploading Hotel Images.', error));
      }
      else {
        return response(res, 200, false, 'Creating Hotel Failed. Please Try Again.');
      }
    }).catch((error) => response(res, 200, false, 'Error At Creating Hotel.', error));
  }).catch((error) => response(res, 200, false, 'Error At Uploading Hotel Images.', error));
};

const updateHotel = async (req, res) => {
  const { id } = req.params;
  var data = {};
  await uploadHotelImages(req).then(async (result) => {
    data = result;
    // eslint-disable-next-line consistent-return
    const image = await HotelImages.deleteImage(id).then(async (_result) => {
      console.log('layer 1', _result);
      if (_result.affectedRows > 0) {
        // eslint-disable-next-line consistent-return
        await HotelImages.createImages(id, data).then(async (__result) => {
          console.log('layer 2', __result);
          if (__result.affectedRows > 0) {
            delete data.filename;
            console.log('final data', data);
            await HotelAmenities.deleteAmenity(id).then(async () => {
              await HotelAmenities.createAmenities(id, data.amenities_id).then(async () => {
                delete data.amenities_id;
                await HotelAmenities.getAmenities(id).then(async (____result) => {
                  console.log('asd', ____result);
                  await Hotel.updateHotel(id, data).then(async (_____result) => {
                    if (_____result.affectedRows > 0) {
                      await Hotel.getHotelById(id).then((______result) => {
                        return response(res, 200, true, 'Hotel Updated Successfuly.', ______result);
                      }).catch((error) => response(res, 200, false, 'Error At Fetching Hotel.', error));
                    }
                    else {
                      return response(res, 200, false, 'Updating Hotel Failed. Please Try Again');
                    }
                  }).catch((error) => response(res, 200, false, 'Error At Updating Hotel.', error));
                }).catch((error) => response(res, 200, false, 'Error At Fetching Hotel Amenities.', error));
              }).catch((error) => response(res, 200, false, 'Error At Creating New Hotel Amenities', error));
            }).catch((error) => response(res, 200, false, 'Error At Deleting Hotel Current Amenities.', error));
          }
          else {
            return response(res, 200, false, 'Creating Hotel Images Failed.');
          }
        }).catch((error) => response(res, 200, false, 'Error At Creating Hotel Image.', error));
      }
      else {
        return response(res, 200, false, 'Deleting Hotel Current Images Failed.');
      }
    }).catch((error) => response(res, 200, false, 'Error At Deleting Hotel Current Images.', error));
  }).catch((error) => response(res, 200, false, 'Error At Uploading Hotel Images.', error));
};

const deleteHotel = async (req, res) => {
  const { id } = req.params;
  await Hotel.deleteHotel(id).then((result) => {
    if (result.affectedRows > 0) {
      return response(res, 200, true, 'Hotel Deleted Successfuly.', result);
    }
    else {
      return response(res, 200, false, 'Deleting Hotel Failed. Please Try Again.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Deleting Hotel.', error));
};

module.exports = {
  getHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel
};
