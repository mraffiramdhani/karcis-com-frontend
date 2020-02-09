// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const { range } = require('../../Utils');

const createRecord = (knex, id) => knex('hotels').insert({
  id,
  name: faker.company.companyName(),
  description: faker.lorem.paragraphs(1),
  address: faker.address.streetAddress(true),
  star: faker.random.number(5),
  city_id: 1,
  longitude: faker.address.longitude(),
  latitude: faker.address.latitude(),
  province_id: 1
});

exports.seed = (knex) => knex('hotels').del()
  .then(() => {
    // Inserts seed entries
    const records = [];
    const hotel = range(1 ,10);
    // Inserts seed entries
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < hotel.length; i++) {
      records.push(createRecord(knex, hotel[i]));
    }

    // eslint-disable-next-line no-console
    console.log('hotels seed');
    return Promise.all(records);
  });
