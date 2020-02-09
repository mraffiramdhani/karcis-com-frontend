/* eslint-disable no-else-return */
const {
	response, redis, urlParser, uploadHotelRoomImages
} = require('../Utils');
const { Hotel, HotelRooms, RoomTypes, RoomImages, RoomAmenities, Amenity } = require('../Services');

const getHotelRooms = async (req, res) => {
  const {
    search, sort, perPage, page
  } = req.query;
  const { id } = req.params;

  var numRows;
  var numPerPage = parseInt(perPage, 10) || 10;
  var currentPage = parseInt(page, 10) || 1;
  var numPages;
  var skip = (currentPage - 1) * numPerPage;

  await HotelRooms.getRoomsCount(id, search, sort).then((result) => {
    numRows = result[0].roomCount;
    numPages = Math.ceil(numRows / numPerPage);
  }).catch((error) => response(res, 200, false, 'Error At Fetching Hotel Rooms Count.', error));

  const limit = `${skip},${numPerPage}`;
  const redisKey = `hotel_rooms_${encodeURI(`hotel_id=${id}` + urlParser(search, sort, currentPage, numPerPage))}`;

  return redis.get(redisKey, async (ex, data) => {
    if (data) {
      const resultJSON = JSON.parse(data);
      return response(res, 200, true, 'Data Found - Redis Cache', resultJSON);
    }
    else {
      const rooms = await HotelRooms.getRooms(id, search, sort, limit);
      if (rooms) {

        const hotel = await Hotel.getHotelById(id);
        for(let i = 0; i < rooms.length; i++){
          var hotelName = hotel;
          rooms[i].hotel = hotelName[0].name;
        }

        for(let i = 0; i < rooms.length; i++){
          const roomName = await RoomTypes.getRoomType(rooms[i].room_type_id);
          const name = roomName;
          rooms[i].name = name[0].name;
        }

      	for(let i = 0; i < rooms.length; i++){
          const roomImages = await RoomImages.getImages(id, rooms[i].room_type_id);
          rooms[i].images =  roomImages;
        }

        for(let i = 0; i < rooms.length; i++){
          rooms[i].amenities = [];
          await RoomAmenities.getAmenities(id, rooms[i].room_type_id).then(async (_result) => {
            for(let j = 0; j < _result.length; j++){
              const roomAmenities = await Amenity.getAmenityById(_result[j].amenities_id);
              rooms[i].amenities.push(roomAmenities[0]);
            }
          }).catch((error) => response(res, 200, false, 'Error At Fetching Room Amenity.', error));
        }

        const result = {
          rooms
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

const getHotelRoomById = async (req, res) => {
  const { id, roomId } = req.params;
  await HotelRooms.getRoom(roomId, id).then(async (result) => {
    if (result.length > 0) {

      const hotel = await Hotel.getHotelById(id);
      var hotelName = hotel;
      result[0].hotel = hotelName[0].name;
    
      const room = await RoomTypes.getRoomType(result[0].room_type_id);
      var roomName = room;
      result[0].name = roomName[0].name;
      console.log(result);

      const roomImages = await RoomImages.getImages(id, result[0].room_type_id);
      if(roomImages) {
        result[0].images =  roomImages;
      }

      result[0].amenities = [];
      const roomAmenities = await RoomAmenities.getAmenities(id, result[0].room_type_id);
      if(roomAmenities) {
        for(let j = 0; j < roomAmenities.length; j++){
          const amenitiesData = await Amenity.getAmenityById(roomAmenities[j].amenities_id);
          result[0].amenities.push(amenitiesData[0]);
        }
      }

      return response(res, 200, true, 'Data Found - Database Query', result[0]);
    }
    else {
      return response(res, 200, true, 'No Room Available.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Fetching Hotel Rooms.', error));
};

const createHotelRoom = async (req, res) => {
  const { id } = req.params;
  await uploadHotelRoomImages(req).then(async (result) => {
    await HotelRooms.createRoom(id, result).then(async (_result) => {
      if (_result.affectedRows > 0) {
        const images = [];
        for(let i = 0; i < result.image.length; i++){
          images.push({filename: result.image[i]});
        }
        await RoomImages.createImages(id, result.room_type_id, images).then(async (__result) => {
          if(__result.length > 0){
            const amenities = [];
            for(let j = 0; j < result.amenities_id.length; j++){
              amenities.push({id: result.amenities_id[j], cost: 0});
            }
            await RoomAmenities.createAmenities(id, result.room_type_id, amenities).then(async (___result) => {
              if (___result.length > 0){
                var data = {};
                const roomAmenities = [];
                const hotelRoomData = await HotelRooms.getRoom(result.room_type_id, id);
                const roomImagesData = await RoomImages.getImages(id, result.room_type_id);
                const roomAmenitiesData = await RoomAmenities.getAmenities(id, result.room_type_id).then(async (amenities_result) => {
                  for(let k = 0; k < amenities_result.length; k++){
                    const amnData = await Amenity.getAmenityById(amenities_result[k].amenities_id);
                    roomAmenities.push(amnData[0]);
                  }
                }).catch((error) => response(res, 200, false, 'Error At Fetching Hotel Room Amenities.', error));
                data.hotel = hotelRoomData;                
                data.hotel[0].images = roomImagesData;
                data.hotel[0].amenities = roomAmenities;
                return response(res, 200, true, 'Hotel Room Created Successfuly.', data.hotel[0]);
              }
              else {
                return response(res, 200, false, 'Storing Hotel Room Amenities Failed. Please Try Again.');
              }
            }).catch((error) => response(res, 200, false, 'Error At Storing Hotel Room Amenities.', error));
          }
          else {
            return response(res, 200, false, 'Storing Hotel Room Images Failed. Please Try Again.');
          }
        }).catch((error) => response(res, 200, false, 'Error At Storing Hotel Room Images.', error));
      }
      else {
        return response(res, 200, false, 'Creating Hotel Room Failed. Please Try Again.');
      }
    }).catch((error) => response(res, 200, false, 'Error At Creating Hotel Rooms.', error));
  }).catch((error) => response(res, 200, false, 'Error At Uploading Hotel Room Images.', error));
};

const updateHotelRoom = async (req, res) => {
  const { id, roomId } = req.params;
  await uploadHotelRoomImages(req).then(async (result) => {
    result.room_type_id = roomId;
    await HotelRooms.createRoom(id, result).then(async (_result) => {
      if (_result.affectedRows > 0) {
        const images = [];
        for(let i = 0; i < result.image.length; i++){
          images.push({filename: result.image[i]});
        }
        await RoomImages.createImages(id, roomId, images).then(async (__result) => {
          if(__result.length > 0){
            const amenities = [];
            for(let j = 0; j < result.amenities_id.length; j++){
              amenities.push({id: result.amenities_id[j], cost: 0});
            }
            await RoomAmenities.createAmenities(id, roomId, amenities).then(async (___result) => {
              if (___result.length > 0){
                var data = {};
                const roomAmenities = [];
                const hotelRoomData = await HotelRooms.getRoom(roomId, id);
                const roomImagesData = await RoomImages.getImages(id, roomId);
                const roomAmenitiesData = await RoomAmenities.getAmenities(id, roomId).then(async (amenities_result) => {
                  for(let k = 0; k < amenities_result.length; k++){
                    const amnData = await Amenity.getAmenityById(amenities_result[k].amenities_id);
                    roomAmenities.push(amnData[0]);
                  }
                }).catch((error) => response(res, 200, false, 'Error At Fetching Hotel Room Amenities.', error));
                data.hotel = hotelRoomData;
                data.hotel[0].images = roomImagesData;
                data.hotel[0].amenities = roomAmenities;
                return response(res, 200, true, 'Hotel Room Updated Successfuly.', data.hotel[0]);
              }
              else {
                return response(res, 200, false, 'Storing Hotel Room Amenities Failed. Please Try Again.');
              }
            }).catch((error) => response(res, 200, false, 'Error At Storing Hotel Room Amenities.', error));
          }
          else {
            return response(res, 200, false, 'Storing Hotel Room Images Failed. Please Try Again.');
          }
        }).catch((error) => response(res, 200, false, 'Error At Storing Hotel Room Images.', error));
      }
      else {
        return response(res, 200, false, 'Updating Hotel Room Failed. Please Try Again.');
      }
    }).catch((error) => response(res, 200, false, 'Error At Updating Hotel Rooms.', error));
  }).catch((error) => response(res, 200, false, 'Error At Uploading Hotel Room Images.', error));
};

const deleteHotelRoom = async (req, res) => {
  const { id, roomId } = req.params;
  await HotelRooms.deleteRoom(roomId, id).then((result) => {
    if (result.affectedRows > 0){
      return response(res, 200, true, 'Hotel Room Deleted Successfuly', result);
    }
    else {
      return response(res, 200, false, 'Deleting Hotel Room Failed. Please Try Again.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Deleting Hotel Room.', error));
}

module.exports = {
  getHotelRooms,
  getHotelRoomById,
  createHotelRoom,
  updateHotelRoom,
  deleteHotelRoom
};
