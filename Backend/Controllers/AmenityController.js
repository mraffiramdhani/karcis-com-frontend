/* eslint-disable no-else-return */
const { response, uploadAmenityIcon } = require('../Utils');
const { Amenity } = require('../Services');

const getAmenities = async (req, res) => {
  await Amenity.getAmenities().then((result) => {
    if (result.length > 0) {
      return response(res, 200, true, 'Data Found.', result);
    }
    else {
      return response(res, 200, false, 'Data Not Found.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Fetching Amenities.', error));
};

const getAmenity = async (req, res) => {
  const { id } = req.params;
  await Amenity.getAmenityById(id).then((result) => {
    if (result.length > 0) {
      return response(res, 200, true, 'Data Found.', result[0]);
    }
    else {
      return response(res, 200, false, 'Data Not Found.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Fetching Amenity By ID.', error));
};

const createAmenity = async (req, res) => {
  var data = {};
  await uploadAmenityIcon(req).then(async (result) => {
    data = result;
    // eslint-disable-next-line consistent-return
    await Amenity.createAmenity(data).then(async (_result) => {
      const { insertId } = _result;
      if (insertId) {
        await Amenity.getAmenityById(insertId).then((__result) => response(res, 200, true, 'Amenity Created Successfuly.', __result[0])).catch((error) => response(res, 200, false, 'Error At Fetching Amenity.', error));
      }
      else {
        return response(res, 200, false, 'Creating Amenity Failed. Please Try Again.');
      }
    }).catch((error) => response(res, 200, false, 'Error At Creating Amenity.', error));
  }).catch((error) => response(res, 200, false, 'Error At Uploading Amenity Icon.', error));
};

const updateAmenity = async (req, res) => {
  const { id } = req.params;
  var data = {};
  await uploadAmenityIcon(req).then(async (result) => {
    data = result;
    // eslint-disable-next-line consistent-return
    await Amenity.updateAmenity(id, data).then(async (_result) => {
      const { affectedRows } = _result;
      if (affectedRows > 0) {
        await Amenity.getAmenityById(id).then((__result) => response(res, 200, true, 'Amenity Updated Successfuly.', __result[0])).catch((error) => response(res, 200, false, 'Error At Fetching Amenity.', error));
      }
      else {
        return response(res, 200, false, 'Updating Amenity Failed.');
      }
    }).catch((error) => response(res, 200, false, 'Error At Updating Amenity.', error));
  }).catch((error) => response(res, 200, false, 'Error At Uploading Amenity Icon.', error));
};

const deleteAmenity = async (req, res) => {
  const { id } = req.params;
  await Amenity.deleteAmenity(id).then((result) => {
    if (result.affectedRows > 0) {
      return response(res, 200, true, 'Amenity Deleted Successfully.', result);
    }
    else {
      return response(res, 200, false, 'Deleting Amenity Failed. Please Try Again.');
    }
  });
};

module.exports = {
  getAmenities,
  getAmenity,
  createAmenity,
  updateAmenity,
  deleteAmenity
};
