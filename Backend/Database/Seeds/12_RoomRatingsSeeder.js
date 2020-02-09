// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const { range } = require('../../Utils');

const createRecord = (knex, hotel_id, room_type_id, user_id) => knex('room_ratings').insert({
  hotel_id,
  room_type_id,
  user_id,
  rating: faker.random.number(5)
});

exports.seed = (knex) => knex('room_ratings').del()
  .then(() => {
    // Inserts seed entries
    const records = [];
    const hotel = range(1 ,10);
    const room = range(1, 5);
    const user = range(2, 11);
    // Inserts seed entries
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < hotel.length; i++) {
      for (let j = 0; j < room.length; j++) {
        for (let k = 0; k < user.length; k++) {
          records.push(createRecord(knex, hotel[i], room[j], user[k]));
        }
      }
    }

    // eslint-disable-next-line no-console
    console.log('room_ratings seed');
    return Promise.all(records);
  });
