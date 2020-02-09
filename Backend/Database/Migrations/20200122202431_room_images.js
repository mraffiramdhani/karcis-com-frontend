
exports.up = (knex) => knex.schema.createTable('room_images', (table) => {
  table.increments('id');
  table.integer('hotel_id').unsigned();
  table.integer('room_type_id').unsigned();
  table.string('filename')
  table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));

  table.foreign('hotel_id').references('hotels.id').onDelete('cascade').onUpdate('cascade');
  table.foreign('room_type_id').references('room_types.id').onDelete('cascade').onUpdate('cascade');
});

exports.down = (knex) => knex.schema.dropTable('room_images');
