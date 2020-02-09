// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const { range } = require('../../Utils');

// eslint-disable-next-line camelcase
const createRecord = (knex, amenities_id, hotel_id, room_type_id) => knex('room_amenities').insert({
  amenities_id,
  hotel_id,
  room_type_id,
  cost: faker.random.number(100000)
});

exports.seed = (knex) => knex('room_amenities').del()
  .then(() => {
    // Inserts seed entries
    const records = [];
    const hotel = range(1, 10);
    const room = range(1,5);
    const amenity = range(1, 4);
    // Inserts seed entries
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < hotel.length; i++) {
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < room.length; j++) {
        // eslint-disable-next-line no-plusplus
        for (let k = 0; k < amenity.length; k++) {
          records.push(createRecord(knex, amenity[k], hotel[i], room[j]));
        }
      }
    }

    // eslint-disable-next-line no-console
    console.log('room_amenities seed');
    return Promise.all(records);
  });
