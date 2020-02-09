const conn = require('./db');
const { hashString } = require('../Utils');

const getUsers = () => {
  const sql = 'SELECT * FROM users';

  return new Promise((resolve, reject) => {
    conn.query(sql, [], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const getUserById = (userId) => {
  const sql = 'SELECT * FROM users WHERE id = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [userId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const getUserByEmail = (email) => {
  const sql = 'SELECT * FROM users WHERE email = ?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [email], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const createUser = (data) => {
  const {
    // eslint-disable-next-line camelcase
    first_name, last_name, email, password, phone, title, image
  } = data;
  const encPass = hashString(password);
  const sql = 'INSERT INTO users(first_name, last_name, email, password, phone, title, image) VALUES(?,?,?,?,?,?,?)';
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line camelcase
    conn.query(sql, [first_name, last_name, email, encPass, phone, title, image],
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
  });
};

const updateUser = (userId, data) => {
  var user = data;
  const sql = 'UPDATE users SET ? WHERE id=?';
  if (user.password) {
    const encPass = hashString(user.password);
    user.password = encPass;
  }
  return new Promise((resolve, reject) => {
    conn.query(sql,
      [user, userId],
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
  });
};

const deleteUser = (userId) => {
  const sql = 'DELETE FROM users WHERE id=?';
  return new Promise((resolve, reject) => {
    conn.query(sql, [userId], (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser
};
