// eslint-disable-next-line import/no-extraneous-dependencies
const { range } = require('../../Utils');

const createRecord = (knex, id, hotel_id) => knex('hotel_images').insert({
  id,
  hotel_id,
  filename: 'default.png'
});

exports.seed = (knex) => knex('hotel_images').del()
  .then(() => {
    // Inserts seed entries
    const records = [];
    const hotel = range(1 ,10);
    // Inserts seed entries
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < hotel.length; i++) {
        records.push(createRecord(knex, hotel[i], hotel[i]));
    }

    // eslint-disable-next-line no-console
    console.log('hotel_imagesc seed');
    return Promise.all(records);
  });
