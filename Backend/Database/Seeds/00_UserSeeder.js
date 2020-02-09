// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const { range, hashString } = require('../../Utils');

const createRecord = (knex, id) => knex('users').insert({
  id,
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  password: hashString('password'),
  phone: '+62987676522',
  image: 'default.png',
  role_id: 2
});

exports.seed = (knex) => knex('users').del()
  .then(() => {
    // Inserts seed entries
    const records = [];
    records.push(knex('users').insert({
      id: 1,
      first_name: 'admin',
      last_name: '',
      email: 'admin@karcis.com',
      password: hashString('password'),
      phone: '+62987676522',
      image: 'default.png',
      role_id: 1
    }));
    const user = range(2, 11);
    // Inserts seed entries
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < user.length; i++) {
      records.push(createRecord(knex, user[i]));
    }

    // eslint-disable-next-line no-console
    console.log('users seed');
    return Promise.all(records);
  });
