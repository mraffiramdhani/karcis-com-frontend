// eslint-disable-next-line import/no-extraneous-dependencies
const { range } = require('../../Utils');

const createRecord = (knex, amenities_id, hotel_id) => knex('hotel_amenities').insert({
  amenities_id,
  hotel_id
});

exports.seed = (knex) => knex('hotel_amenities').del()
  .then(() => {
    // Inserts seed entries
    const records = [];
    const hotel = range(1 ,10);
    const amenity = range(1, 4);
    // Inserts seed entries
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < hotel.length; i++) {
      for(let j = 0; j < amenity.length; j++){
        records.push(createRecord(knex, amenity[j], hotel[i]));
      }
    }

    // eslint-disable-next-line no-console
    console.log('hotel_amenities seed');
    return Promise.all(records);
  });
