/* eslint-disable camelcase */
const conn = require('./db');
const { paramParser } = require('../Utils');

const getCities = (search) => {
  const sql = 'SELECT * FROM cities';
  const sqlParsed = paramParser(sql, search, null, null, true);

  return new Promise((resolve, reject) => {
    conn.query(sqlParsed, [], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const getCityById = (cityId) => {
  const sql = 'SELECT * FROM cities WHERE id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [cityId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}

const createCity = (data) => {
  const { name, province_id } = data;
  const sql = 'INSERT INTO cities(name, province_id) VALUES(?,?)';
  return new Promise((resolve, reject) => {
    conn.query(sql, [name, province_id], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const updateCity = (cityId, data) => {
  const { name, province_id } = data;
  const sql = 'UPDATE cities SET name = ?, province_id = ? WHERE id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [name, province_id, cityId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}

const deleteCity = (cityId) => {
  const sql = 'DELETE FROM cities WHERE id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [cityId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}

module.exports = {
  getCities,
  getCityById,
  createCity,
  updateCity,
  deleteCity
};
