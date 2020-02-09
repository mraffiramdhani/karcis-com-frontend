
exports.up = (knex) => knex.schema.createTable('provinces', (table) => {
  table.increments('id');
  table.string('name');
});

exports.down = (knex) => knex.schema.dropTable('provinces');
