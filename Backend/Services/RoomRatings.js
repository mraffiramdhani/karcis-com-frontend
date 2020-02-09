/* eslint-disable camelcase */
const conn = require('./db');

const getRatings = (hotelId, roomTypeId) => {
  const sql = 'SELECT * FROM room_ratings WHERE hotel_id = ? AND room_type_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [hotelId, roomTypeId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const createRating = (hotelId, roomTypeId, userId, data) => {
  const { rating } = data
  const sql = 'INSERT INTO room_ratings(hotel_id, room_type_id, user_id, rating) VALUES(?,?,?,?)';
  return new Promise((resolve, reject) => {
    conn.query(sql, [hotelId, roomTypeId, UserId, rating], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const updateRating = (ratingId, hotelId, roomTypeId, userId, data) => {
  const { rating } = data;
  const sql = 'UPDATE room_ratings SET rating = ? WHERE id = ? AND hotel_id = ? AND room_type_id = ? AND user_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [filename, ratingId, hotelId, roomTypeId, userId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}

const deleteRating = (ratingId, hotelId, roomTypeId, userId) => {
  const sql = 'DELETE FROM room_ratings WHERE id = ? AND hotel_id = ? AND room_type_id = ? AND user_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [ratingId, hotelId, roomTypeId, userId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}

module.exports = {
  getRatings,
  createRating,
  updateRating,
  deleteRating
};
