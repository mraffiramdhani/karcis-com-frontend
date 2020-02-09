/* eslint-disable camelcase */
const conn = require('./db');

const getBalanceHistories = (userId) => {
  const sql = 'SELECT * FROM balance_histories WHERE user_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [userId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const createBalanceHistory = (userId, balanceId, data) => {
  const {
    balance
  } = data;
  const topUp = (data.top_up ? data.top_up : 0);
  const sql = 'INSERT INTO balance_histories(user_id, balance_id, balance, top_up) VALUES(?,?,?,?)';
  return new Promise((resolve, reject) => {
    conn.query(sql, [userId, balanceId, balance, topUp], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

module.exports = {
  getBalanceHistories,
  createBalanceHistory
};
