
exports.up = (knex) => knex.schema.createTable('balance_histories', (table) => {
  table.increments('id');
  table.integer('user_id').unsigned();
  table.integer('balance_id').unsigned();
  table.decimal('balance', 12, 2);
  table.decimal('top_up', 12, 2).defaultTo(0);
  table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

  table.foreign('user_id').references('users.id').onDelete('cascade').onUpdate('cascade');
  table.foreign('balance_id').references('balances.id').onDelete('cascade').onUpdate('cascade');
});

exports.down = (knex) => knex.schema.dropTable('balance_histories');
