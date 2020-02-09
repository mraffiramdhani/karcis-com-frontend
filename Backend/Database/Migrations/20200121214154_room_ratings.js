
exports.up = (knex) => knex.schema.createTable('room_ratings', (table) => {
  table.increments('id');
  table.integer('hotel_id').unsigned();
  table.integer('room_type_id').unsigned();
  table.integer('user_id').unsigned();
  table.float('rating', 2, 1).defaultTo(1);

  table.foreign('hotel_id').references('hotels.id').onDelete('cascade').onUpdate('cascade');
  table.foreign('room_type_id').references('room_types.id').onDelete('cascade').onUpdate('cascade');
  table.foreign('user_id').references('users.id').onDelete('cascade').onUpdate('cascade');
});

exports.down = (knex) => knex.schema.dropTable('room_ratings');
