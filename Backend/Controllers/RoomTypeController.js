/* eslint-disable no-else-return */
const { response } = require('../Utils');
const { RoomTypes } = require('../Services');

const getRoomTypes = async (req, res) => {
  await RoomTypes.getRoomTypes().then((result) => {
    if (result.length > 0) {
      return response(res, 200, true, 'Data Found.', result);
    }
    else {
      return response(res, 200, false, 'Data Not Found.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Fetching Room Types.', error));
};

const getRoomTypeById = async (req, res) => {
  const { id } = req.params;
  await RoomTypes.getRoomType(id).then((result) => {
    if (result.length > 0) {
      return response(res, 200, true, 'Data Found.', result[0]);
    }
    else {
      return response(res, 200, false, 'Data Not Found.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Fetching Room Type', error));
};

const createRoomType = async (req, res) => {
  await RoomTypes.createRoomType(req.body).then(async (result) => {
    const { insertId } = result;
    if (insertId > 0) {
      await RoomTypes.getRoomType(insertId).then((_result) => {
        if (_result.length > 0) {
          return response(res, 200, true, 'Room Type Created Successfuly.', _result[0]);
        }
        else {
          return response(res, 200, false, 'Data Not Found.');
        }
      }).catch((error) => response(res, 200, false, 'Error At Fetching Room Type.', error));
    }
    else {
      return response(res, 200, false, 'Creating Room Type Failed. Please Try Again.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Creating Room Type.', error));
};

const updateRoomType = async (req, res) => {
  const { id } = req.params;
  await RoomTypes.updateRoomType(id, req.body).then(async (result) => {
    const { affectedRows } = result;
    if (affectedRows > 0) {
      await RoomTypes.getRoomType(id).then((_result) => {
        if (_result.length > 0) {
          return response(res, 200, true, 'Room Type Updated Successfuly.', _result[0]);
        }
        else {
          return response(res, 200, false, 'Data Not Found.');
        }
      }).catch((error) => response(res, 200, false, 'Error At Fetching Room Type.', error));
    }
    else {
      return response(res, 200, false, 'Updating Room Type Failed. Please Try Again.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Updating Room Type.', error));
};

const deleteRoomType = async (req, res) => {
  const { id } = req.params;
  await RoomTypes.deleteRoomType(id).then((result) => {
    if (result.affectedRows > 0){
      return response(res, 200, true, 'Room Type Deleted Successfuly.', result);
    }
    else {
      return response(res, 200, false, 'Deleting Room Type Failed. Please Try Again.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Deleting Room Type.', error));
};

module.exports = {
  getRoomTypes,
  getRoomTypeById,
  createRoomType,
  updateRoomType,
  deleteRoomType
};
