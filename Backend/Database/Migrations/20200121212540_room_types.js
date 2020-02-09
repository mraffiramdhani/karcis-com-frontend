
exports.up = (knex) => knex.schema.createTable('room_types', (table) => {
  table.increments('id');
  table.string('name');
  table.text('description');
});

exports.down = (knex) => knex.schema.dropTable('room_types');
