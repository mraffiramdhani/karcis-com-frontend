const conn = require('./db');
const { paramParser } = require('../Utils');

const getHotelsCount = (search, sort) => {
  const sql = 'SELECT COUNT(*) as hotelCount FROM hotels';
  const sqlParsed = paramParser(sql, search, sort, null, true);

  return new Promise((resolve, reject) => {
    conn.query(sqlParsed, [], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const getHotels = (search, sort, limit) => {
  const sql = 'SELECT * FROM hotels';
  const sqlParsed = paramParser(sql, search, sort, limit, true);

  return new Promise((resolve, reject) => {
    conn.query(sqlParsed, [], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const getHotelById = (hotelId) => {
  const sql = 'SELECT * FROM hotels WHERE id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [hotelId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const createHotel = (data) => {
  const {
    // eslint-disable-next-line camelcase
    name, description, address, city_id, latitude, longitude, province_id
  } = data;
  const sql = 'INSERT INTO hotels(name, description, address, city_id, latitude, longitude, province_id) VALUES(?,?,?,?,?,?,?)';
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line camelcase
    conn.query(sql, [name, description, address, city_id, latitude, longitude, province_id],
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
  });
};

const updateHotel = (hotelId, data) => {
  const sql = 'UPDATE hotels SET ? WHERE id=?';
  return new Promise((resolve, reject) => {
    conn.query(sql,
      [data, hotelId],
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
  });
};

const deleteHotel = (hotelId) => {
  const sql = 'DELETE FROM hotels WHERE id=?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [hotelId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

module.exports = {
  getHotelsCount,
  getHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel
};
