
exports.up = (knex) => knex.schema.createTable('hotel_orders', (table) => {
  table.increments('id');
  table.integer('user_id').unsigned();
  table.integer('room_type_id').unsigned();
  table.integer('hotel_id').unsigned();
  table.integer('room_count').defaultTo(1);
  table.integer('guest_count').defaultTo(1);
  table.decimal('cost', 12, 2).nullable();
  table.decimal('subtotal', 12,2).nullable();
  table.dateTime('check_in');
  table.dateTime('check_out');
  table.integer('duration').defaultTo(1);
  table.text('message').defaultTo('');
  table.boolean('is_complete').defaultTo(0);
  table.boolean('is_canceled').defaultTo(0);
  table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

  table.foreign('room_type_id').references('room_types.id').onDelete('cascade').onUpdate('cascade');
  table.foreign('hotel_id').references('hotels.id').onDelete('cascade').onUpdate('cascade');
  table.foreign('user_id').references('users.id').onDelete('cascade').onUpdate('cascade');
});

exports.down = (knex) => knex.schema.dropTable('hotel_orders');
