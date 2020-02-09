
exports.seed = (knex) => knex('roles').del()
  .then(() => knex('roles').insert([
    { id: 1, name: 'administrator' },
    { id: 2, name: 'customer' }
  ]));
