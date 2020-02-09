// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const { range } = require('../../Utils');

const createRecord = (knex, id) => knex('room_types').insert({
  id,
  name: faker.lorem.sentence(),
  description: faker.lorem.paragraph()
});

exports.seed = (knex) => knex('room_types').del()
  .then(() => {
    // Inserts seed entries
    const records = [];
    const type = range(1 ,5);
    // Inserts seed entries
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < type.length; i++) {
      records.push(createRecord(knex, type[i]));
    }

    // eslint-disable-next-line no-console
    console.log('room_types seed');
    return Promise.all(records);
  });
