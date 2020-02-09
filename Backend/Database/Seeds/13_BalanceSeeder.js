// eslint-disable-next-line import/no-extraneous-dependencies
const { range } = require('../../Utils');

const createRecord = (knex, id, user_id) => knex('balances').insert({
  id,
  user_id,
  balance: 1000
});

exports.seed = (knex) => knex('balances').del()
  .then(() => {
    // Inserts seed entries
    const records = [];
    const user = range(2 ,11);
    // Inserts seed entries
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < user.length; i++) {
      records.push(createRecord(knex, user[i], user[i]));
    }

    // eslint-disable-next-line no-console
    console.log('balance seed');
    return Promise.all(records);
  });
