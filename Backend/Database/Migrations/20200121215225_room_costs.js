
exports.up = (knex) => knex.schema.createTable('room_costs', (table) => {
  table.increments('id');
  table.integer('hotel_id').unsigned();
  table.integer('room_type_id').unsigned();
  table.decimal('cost', 12, 2);
  table.float('discount', 4, 1);
  table.decimal('breakfast_included', 12, 2);

  table.foreign('hotel_id').references('hotels.id').onDelete('cascade').onUpdate('cascade');
  table.foreign('room_type_id').references('room_types.id').onDelete('cascade').onUpdate('cascade');
});

exports.down = (knex) => knex.schema.dropTable('room_costs');
