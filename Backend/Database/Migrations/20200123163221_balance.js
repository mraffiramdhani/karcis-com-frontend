
exports.up = (knex) => knex.schema.createTable('balances', (table) => {
  table.increments('id');
  table.integer('user_id').unsigned();
  table.decimal('balance', 12, 2);
  table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

  table.foreign('user_id').references('users.id').onDelete('cascade').onUpdate('cascade');
});

exports.down = (knex) => knex.schema.dropTable('balances');
