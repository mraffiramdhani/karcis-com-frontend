/* eslint-disable camelcase */
const conn = require('./db');

const getAmenities = () => {
  const sql = 'SELECT * FROM amenities';
  return new Promise((resolve, reject) => {
    conn.query(sql, [], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const getAmenityById = (amenityId) => {
  const sql = 'SELECT * FROM amenities WHERE id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [amenityId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}

const createAmenity = (data) => {
  const { name, icon } = data;
  const sql = 'INSERT INTO amenities(name, icon) VALUES(?,?)';
  return new Promise((resolve, reject) => {
    conn.query(sql, [name, icon], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const updateAmenity = (amenityId, data) => {
  const { name, icon } = data;
  const sql = 'UPDATE amenities SET name = ?, icon = ? WHERE id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [name, icon, amenityId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}

const deleteAmenity = (amenityId) => {
  const sql = 'DELETE FROM amenities WHERE id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [amenityId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}

module.exports = {
  getAmenities,
  getAmenityById,
  createAmenity,
  updateAmenity,
  deleteAmenity
};
