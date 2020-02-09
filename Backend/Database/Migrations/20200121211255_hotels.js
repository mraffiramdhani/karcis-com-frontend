
exports.up = (knex) => knex.schema.createTable('hotels', (table) => {
  table.increments('id');
  table.string('name');
  table.text('description');
  table.text('address');
  table.integer('star').defaultTo(1);
  table.integer('city_id').unsigned();
  table.string('latitude');
  table.string('longitude');
  table.integer('province_id').unsigned();

  table.foreign('city_id').references('cities.id').onDelete('cascade').onUpdate('cascade');
  table.foreign('province_id').references('provinces.id').onDelete('cascade').onUpdate('cascade');
  table.unique('name');
});

exports.down = (knex) => knex.schema.dropTable('hotels');
