
exports.seed = (knex) => knex('amenities').del()
  .then(() => knex('amenities').insert([
    { id: 1, name: 'AC', icon: 'default.png' },
    { id: 2, name: 'Tempat Parkir', icon: 'default.png' },
    { id: 3, name: 'WiFi', icon: 'default.png' },
    { id: 4, name: 'Breakfast', icon: 'default.png' }
  ]));
