// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const { range } = require('../../Utils');

// eslint-disable-next-line camelcase
const createRecord = (knex, hotel_id, room_type_id) => knex('room_costs').insert({
  hotel_id,
  room_type_id,
  cost: faker.random.number(2000000),
  discount: faker.random.number(100),
  breakfast_included: faker.random.number(100000)
});

exports.seed = (knex) => knex('room_costs').del()
  .then(() => {
    // Inserts seed entries
    const records = [];
    const hotel = range(1, 10);
    const room = range(1, 5);
    // Inserts seed entries
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < hotel.length; i++) {
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < room.length; j++) {
        records.push(createRecord(knex, hotel[i], room[j]));
      }
    }

    // eslint-disable-next-line no-console
    console.log('room_costs seed');
    return Promise.all(records);
  });
