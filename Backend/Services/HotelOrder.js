/* eslint-disable camelcase */
const conn = require('./db');

const getOrders = (userId) => {
  const sql = 'SELECT * FROM hotel_orders WHERE user_id = ? AND is_complete = 0 AND is_canceled = 0 AND date_sub(CURDATE(), interval 1 day) <= check_in';
  return new Promise((resolve, reject) => {
    conn.query(sql, [userId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const getOrderHistories = (userId) => {
  const sql = 'SELECT * FROM hotel_orders WHERE (is_complete = 1 OR is_canceled = 1 OR date_sub(CURDATE(), interval 1 day) >= check_in) AND user_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [userId], (err, res) => {
      if(err) reject(err);
      resolve(res);
    });
  });
};

const getOrderById = (orderId, userId) => {
  const sql = 'SELECT * FROM hotel_orders WHERE id = ? AND user_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [orderId, userId], (err, res) => {
      if(err) reject(err);
      resolve(res);
    });
  });
};

const createOrder = (userId, data) => {
  const { hotel_id, room_type_id, room_count, guest_count, duration, message, check_in, check_out, cost, subtotal } = data;
  const sql = 'INSERT INTO hotel_orders(user_id, hotel_id, room_type_id, room_count, guest_count, duration, message, check_in, check_out, cost, subtotal) VALUES(?,?,?,?,?,?,?,?,?,?,?)';
  return new Promise((resolve, reject) => {
    conn.query(sql, [userId, hotel_id, room_type_id, room_count, guest_count, duration, message, check_in, check_out, cost, subtotal], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

// const updateOrder = (orderId, userId, data) => {
//   const sql = 'UPDATE hotel_orders SET ? WHERE id = ? AND user_id = ?';
//   return new Promise((resolve, reject) => {
//     conn.query(sql, [data, orderId, userId], (err, res) => {
//       if(err) reject(err);
//       resolve(res);
//     });
//   });
// };

const cancelOrder = (orderId, userId) => {
  const sql = 'UPDATE hotel_orders SET is_canceled = 1 WHERE id = ? AND user_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [orderId, userId], (err, res) => {
      if(err) reject(err);
      resolve(res);
    });
  });
};

const completeOrder = (orderId, userId) => {
  const sql = 'UPDATE hotel_orders SET is_complete = 1 WHERE id = ? AND user_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [orderId, userId], (err, res) => {
      if(err) reject(err);
      resolve(res);
    });
  });
};

const deleteOrder = (orderId, userId) => {
  const sql = 'DELETE FROM hotel_orders WHERE id = ? AND user_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [orderId, userId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

module.exports = {
  getOrders,
  getOrderHistories,
  getOrderById,
  createOrder,
  // updateOrder,
  cancelOrder,
  completeOrder,
  deleteOrder
};
