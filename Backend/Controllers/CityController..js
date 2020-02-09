/* eslint-disable no-else-return */
const { response } = require('../Utils');
const { City } = require('../Services');

const getCity = async (req, res) => {
  const { search } = req.query;
  await City.getCities(search).then((result) => {
    if (result.length > 0) {
      return response(res, 200, true, 'Data Found.', result);
    }
    else {
      return response(res, 200, true, 'Data Not Found.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Fetching Balances.', error));
};

module.exports = {
  getCity
};
