
exports.up = (knex) => knex.schema.createTable('room_amenities', (table) => {
  table.increments('id');
  table.integer('amenities_id').unsigned();
  table.integer('hotel_id').unsigned();
  table.integer('room_type_id').unsigned();
  table.decimal('cost', 12, 2).defaultTo(0);

  table.foreign('amenities_id').references('amenities.id').onDelete('cascade').onUpdate('cascade');
  table.foreign('hotel_id').references('hotels.id').onDelete('cascade').onUpdate('cascade');
  table.foreign('room_type_id').references('room_types.id').onDelete('cascade').onUpdate('cascade');
});

exports.down = (knex) => knex.schema.dropTable('room_amenities');
