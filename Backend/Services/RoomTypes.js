/* eslint-disable camelcase */
const conn = require('./db');

const getRoomTypes = () => {
  const sql = 'SELECT * FROM room_types';
  return new Promise((resolve, reject) => {
    conn.query(sql, [], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const getRoomType = (roomTypeId) => {
  const sql = 'SELECT * FROM room_types WHERE id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [roomTypeId], (err, res) => {
      if(err) reject(err);
      resolve(res);
    });
  });
};

const createRoomType = (data) => {
  const { name, description } = data;
  const sql = 'INSERT INTO room_types(name, description) VALUES(?,?)';
  return new Promise((resolve, reject) => {
    conn.query(sql, [name, description], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const updateRoomType = (roomTypeId, data) => {
  const { name, description } = data;
  const sql = 'UPDATE room_types SET name = ?, description = ? WHERE id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [name, description, roomTypeId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}

const deleteRoomType = (roomTypeId) => {
  const sql = 'DELETE FROM room_types WHERE id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [roomTypeId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

module.exports = {
  getRoomTypes,
  getRoomType,
  createRoomType,
  updateRoomType,
  deleteRoomType
};
