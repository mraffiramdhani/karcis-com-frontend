
exports.up = (knex) => knex.schema.createTable('roles', (table) => {
  table.increments('id');
  table.string('name');
});

exports.down = (knex) => knex.schema.dropTable('roles');
