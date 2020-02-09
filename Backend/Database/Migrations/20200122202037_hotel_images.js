
exports.up = (knex) => knex.schema.createTable('hotel_images', (table) => {
  table.increments('id');
  table.integer('hotel_id').unsigned();
  table.string('filename')
  table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));

  table.foreign('hotel_id').references('hotels.id').onDelete('cascade').onUpdate('cascade');
});

exports.down = (knex) => knex.schema.dropTable('hotel_images');
