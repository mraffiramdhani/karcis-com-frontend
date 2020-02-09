
exports.up = (knex) => knex.schema.createTable('cities', (table) => {
  table.increments('id');
  table.string('name');
  table.integer('province_id').unsigned();

  table.foreign('province_id').references('provinces.id').onDelete('cascade').onUpdate('cascade');
});

exports.down = (knex) => knex.schema.dropTable('cities');
