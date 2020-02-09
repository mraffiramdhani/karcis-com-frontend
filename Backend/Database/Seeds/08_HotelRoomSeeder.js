// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const { range } = require('../../Utils');

const createRecord = (knex, room_type_id, hotel_id) => knex('hotel_rooms').insert({
  room_type_id,
  hotel_id,
  cost: faker.random.number(2000000),
  capacity: 2,
  description: faker.lorem.paragraph()
});

exports.seed = (knex) => knex('hotel_rooms').del()
  .then(() => {
    // Inserts seed entries
    const records = [];
    const hotel = range(1,10);
    const room = range(1 ,5);
    // Inserts seed entries
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < hotel.length; i++) {
      for(let j = 0; j < room.length; j++){
        records.push(createRecord(knex, room[j], hotel[i]));
      }
    }

    // eslint-disable-next-line no-console
    console.log('hotel_rooms seed');
    return Promise.all(records);
  });
