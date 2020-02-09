/* eslint-disable no-else-return */
const { response } = require('../Utils');
const { Balance, BalanceHistories } = require('../Services');

const getBalanceByUser = async (req, res) => {
  const { id } = req.auth;
  await Balance.getBalance(id).then((result) => {
    if (result.length > 0) {
      return response(res, 200, true, 'Data Found.', result[0]);
    }
    else {
      return response(res, 200, false, 'Data Not Found.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Fetching Balances.', error));
};

const getBalanceHistories = async (req, res) => {
  const { id } = req.auth;
  await BalanceHistories.getBalanceHistories(id).then((result) => {
    if (result.length > 0) {
      return response(res, 200, true, 'Data Found.', result);
    }
    else {
      return response(res, 200, false, 'Data Not Found.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Fetching Balance Histories.', error));
};

const updateBalance = async (req, res) => {
  const { id } = req.auth;
  const { value } = req.body;
  await Balance.updateBalance(id, value).then(async (result) => {
    if (result.affectedRows > 0) {
      await Balance.getBalance(id).then(async (_result) => {
        if (_result.length > 0) {
          const data = { balance: _result[0].balance, top_up: value}
          await BalanceHistories.createBalanceHistory(id, _result[0].id, data).then((__result) => {
            if (__result.insertId > 0) {
              return response(res, 200, true, 'Top Up Balance Success.', _result[0]);
            }
            else {
              return response(res, 200, false, 'Balance Top Up Failed. Please Try Again.');
            }
          }).catch((error) => response(res, 200, false, 'Error At Storing Top Up History.', error));
        }
        else {
          return response(res, 200, false, 'Fetching User Balance Failed. Please Try Again.');
        }
      }).catch((error) => response(res, 200, false, 'Error At Fetching User Balance.', error));
    }
    else {
      return response(res, 200, false, 'Updating Balance Failed. Please Try Again.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Updating User Balance.', error));
};

module.exports = {
  getBalanceByUser,
  getBalanceHistories,
  updateBalance
};
