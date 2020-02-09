
exports.up = (knex) => knex.schema.createTable('hotel_amenities', (table) => {
  table.integer('amenities_id').unsigned();
  table.integer('hotel_id').unsigned();

  table.foreign('amenities_id').references('amenities.id').onDelete('cascade').onUpdate('cascade');
  table.foreign('hotel_id').references('hotels.id').onDelete('cascade').onUpdate('cascade');
});

exports.down = (knex) => knex.schema.dropTable('hotel_amenities');
