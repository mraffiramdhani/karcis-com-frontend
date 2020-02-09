
exports.seed = (knex) => knex('cities').del()
  .then(() => knex('cities').insert([
    { id: 1, name: 'Bandung', province_id: 9 },
    { id: 2, name: 'Jakarta', province_id: 6 },
    { id: 3, name: 'Solo', province_id: 10 },
    { id: 4, name: 'Surabaya', province_id: 11 }
  ]));
