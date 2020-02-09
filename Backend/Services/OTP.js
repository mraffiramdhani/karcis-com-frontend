/* eslint-disable camelcase */
const conn = require('./db');

const putCode = (code, expire) => {
  const sql = `INSERT INTO otp_codes(code, expired_at) VALUES(?,date_add(?, interval ${expire} minute))`;
  return new Promise((resolve, reject) => {
    conn.query(sql, [code, new Date()], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const checkCode = (code) => {
  const sql = 'SELECT * FROM otp_codes WHERE code = ?  AND is_active = 1 AND expired_at >= ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [code, new Date()], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const revokeCode = (code) => {
  const sql = 'UPDATE otp_codes SET is_active = 0 WHERE code = ? AND is_active = 1 AND expired_at >= ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [code, new Date()], (err, res) => {
      if(err) reject(err);
      resolve(res);
    });
  });
};

module.exports = {
  putCode,
  checkCode,
  revokeCode
};
