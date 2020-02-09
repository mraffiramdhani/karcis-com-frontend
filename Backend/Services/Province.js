/* eslint-disable camelcase */
const conn = require('./db');

const getProvinces = () => {
  const sql = 'SELECT * FROM provinces';
  return new Promise((resolve, reject) => {
    conn.query(sql, [], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const getProvince = (provinceId) => {
  const sql = 'SELECT * FROM provinces WHERE id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [provinceId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const createProvince = (data) => {
  const { name } = data;
  const sql = 'INSERT INTO provinces(name) VALUES(?)';
  return new Promise((resolve, reject) => {
    conn.query(sql, [name], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const updateProvince = (provinceId, data) => {
  const { name } = data;
  const sql = 'UPDATE provinces SET name = ? WHERE id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [name, provinceId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}

const deleteProvince = (provinceId) => {
  const sql = 'DELETE FROM provinces WHERE id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [provinceId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}

module.exports = {
  getProvinces,
  getProvince,
  createProvince,
  updateProvince,
  deleteProvince
};
