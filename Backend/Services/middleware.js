/* eslint-disable no-else-return */
const conn = require('./db');
const { isRevoked } = require('./Token');
const { response, verifyToken } = require('../Utils');

const auth = async (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    const jwtToken = req.headers.authorization.substr(7);
    req.headers.jwt_token = jwtToken;
    // eslint-disable-next-line consistent-return
    await isRevoked(jwtToken).then((result) => {
      if (result.length > 0) {
        return response(res, 200, false, 'Session Expired. PLease Log In Again.');
      }
      else {
        try {
          req.auth = verifyToken(jwtToken);
          next();
        }
        catch (error) {
          return response(res, 200, false, 'Error At Verifying JWToken.', error);
        }
      }
    }).catch((error) => response(res, 200, false, 'Error At Validating Token.', error));
  }
  else {
    response(res, 200, false, 'Authorization Failed. Please Log In Again.');
  }
};

const hasRole = function HasRole(roles) {
  // eslint-disable-next-line no-param-reassign
  if (roles === 'all') roles = ['customer', 'administrator', 'restaurant'];
  return (req, res, next) => {
    // eslint-disable-next-line camelcase
    const { role_id } = req.auth;
    // eslint-disable-next-line camelcase
    conn.execute('select * from roles where id=?', [role_id], (err, result) => {
      if (err) {
        response(res, 200, false, 'Error.', err);
      }
      else if (result.length > 0) {
        if (Array.isArray(roles)) {
          let checked = false;
          // eslint-disable-next-line camelcase
          let is_auth = false;
          while (!checked) {
            let count = 0;
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < roles.length; i++) {
              if (roles[i] === result[0].name) {
                checked = true;
                // eslint-disable-next-line camelcase
                is_auth = true;
              }
              else {
                // eslint-disable-next-line no-plusplus
                count++;
              }
            }
            if (count === roles.length) {
              checked = true;
            }
          }
          // eslint-disable-next-line camelcase
          if (is_auth) {
            next();
          }
          else {
            response(res, 200, false, 'Access Denied. User Role Unidentified.');
          }
        }
        else if (typeof roles === 'string' && roles.toLowerCase() === result[0].name) {
          next();
        }
        else {
          response(res, 200, false, 'Access Denied. User Role Unidentified.');
        }
      }
    });
  };
};

module.exports = { auth, hasRole };
