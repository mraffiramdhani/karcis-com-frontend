/* eslint-disable camelcase */
const conn = require('./db');

const getAmenities = (hotelId) => {
  const sql = 'SELECT * FROM hotel_amenities WHERE hotel_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [hotelId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const createAmenities = (hotelId, data) => {
  var amnData = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < data.length; i++) {
    amnData.push(`(${data[i]}, ${hotelId})`);
  }
  const sql = `INSERT INTO hotel_amenities(amenities_id, hotel_id) VALUES ${amnData.join(',')}`;
  return new Promise((resolve, reject) => {
    conn.query(sql, [], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const deleteAmenity = (hotelId) => {
  const sql = 'DELETE FROM hotel_amenities WHERE hotel_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [hotelId], (err, res) => {
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
