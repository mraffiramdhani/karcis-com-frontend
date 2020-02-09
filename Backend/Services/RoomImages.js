/* eslint-disable camelcase */
const conn = require('./db');

const getImages = (hotelId, roomTypeId) => {
  const sql = 'SELECT * FROM room_images WHERE hotel_id = ? AND room_type_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [hotelId, roomTypeId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const createImages = (hotelId, roomTypeId, data) => {
  var imgData = [];
  for(let i = 0; i < data.length; i++){
    imgData.push(`(${hotelId}, ${roomTypeId}, '${data[i].filename}')`);
  }
  const sql = `DELETE FROM room_images WHERE hotel_id = ${hotelId} AND room_type_id = ${roomTypeId};INSERT INTO room_images(hotel_id, room_type_id, filename) VALUES ${imgData.join(',')}`;
  return new Promise((resolve, reject) => {
    conn.query(sql, [], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

// const updateImage = (imageId, roomTypeId, hotelId, data) => {
//   const { filename } = data;
//   const sql = 'UPDATE room_images SET filename = ? WHERE id = ? AND hotel_id = ? AND room_type_id = ?';
//   return new Promise((resolve, reject) => {
//     conn.query(sql, [filename, imageId, hotelId, roomTypeId], (err, res) => {
//       if (err) reject(err);
//       resolve(res);
//     });
//   });
// }

const deleteImage = (imageId, hotelId, roomTypeId) => {
  const sql = 'DELETE FROM room_images WHERE id = ? AND hotel_id = ? AND room_type_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [imageId, hotelId, roomTypeId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}

module.exports = {
  getImages,
  createImages,
  deleteImage
};
