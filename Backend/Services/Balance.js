/* eslint-disable camelcase */
const conn = require('./db');

const getBalance = (userId) => {
  const sql = 'SELECT * FROM balances WHERE user_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [userId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const createBalance = (userId) => {
  const sql = 'INSERT INTO balances(user_id, balance) VALUES(?,1000)';
  return new Promise((resolve, reject) => {
    conn.query(sql, [userId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const updateBalance = (userId, balance) => {
  const sql = 'UPDATE balances SET balance = balance + ? WHERE user_id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [balance, userId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

module.exports = {
  getBalance,
  createBalance,
  updateBalance
};
