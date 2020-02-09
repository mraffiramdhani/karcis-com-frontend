/* eslint-disable camelcase */
const conn = require('./db');

const getAmenities = (hotelId, roomTypeId) => {
  const sql = 'SELECT * FROM room_amenities WHERE hotel_id = ? AND room_type_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [hotelId, roomTypeId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const createAmenities = (hotelId, roomTypeId, data) => {
  var amnData = [];
  for(let i = 0; i < data.length; i++){
    amnData.push(`(${data[i].id}, ${hotelId}, ${roomTypeId}, ${data[i].cost})`);
  }
  const sql = `DELETE FROM room_amenities WHERE hotel_id = ${hotelId} AND room_type_id = ${roomTypeId};INSERT INTO room_amenities(amenities_id, hotel_id, room_type_id, cost) VALUES ${amnData.join(',')}`;
  return new Promise((resolve, reject) => {
    conn.query(sql, [], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const deleteAmenity = (amenityId, hotelId, roomTypeId) => {
  const sql = 'DELETE FROM room_amenities WHERE id = ? AND hotel_id = ? AND room_type_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [amenityId, hotelId, roomTypeId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

module.exports = {
  getAmenities,
  createAmenities,
  deleteAmenity
};
