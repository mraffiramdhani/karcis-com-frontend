// eslint-disable-next-line import/no-extraneous-dependencies
const { range } = require('../../Utils');

const createRecord = (knex, room_type_id, hotel_id) => knex('room_images').insert({
  hotel_id,
  room_type_id,
  filename: 'default.png'
});

exports.seed = (knex) => knex('room_images').del()
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
    console.log('room_images seed');
    return Promise.all(records);
  });
