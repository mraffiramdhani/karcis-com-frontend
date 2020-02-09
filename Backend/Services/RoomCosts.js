/* eslint-disable camelcase */
const conn = require('./db');

const getRoomCost = (hotelId, roomTypeId) => {
  const sql = 'SELECT * FROM room_costs WHERE hotel_id = ? AND room_type_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [hotelId, roomTypeId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const createRoomCost = (hotelId, roomTypeId, data) => {
  const { cost, discount, breakfast_included } = data;
  const sql = 'INSERT INTO room_costs(hotel_id, room_type_id, cost, discount, breakfast_included) VALUES(?,?,?,?,?)';
  return new Promise((resolve, reject) => {
    conn.query(sql, [hotelId, roomTypeId, cost, discount, breakfast_included], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const deleteRoomCost = (roomCostId, hotelId, roomTypeId) => {
  const sql = 'DELETE FROM room_costs WHERE id = ? AND hotel_id = ? AND room_type_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [roomCostId, hotelId, roomTypeId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

module.exports = {
  getRoomCost,
  createRoomCost,
  deleteRoomCost
};
