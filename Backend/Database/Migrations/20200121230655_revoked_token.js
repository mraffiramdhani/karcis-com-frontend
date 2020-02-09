
exports.up = (knex) => knex.schema.createTable('revoked_token', (table) => {
  table.increments('id');
  table.text('token');
  table.boolean('is_revoked').defaultTo(0);
  table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
});

exports.down = (knex) => knex.schema.dropTable('revoked_token');
