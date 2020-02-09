
exports.up = (knex) => knex.schema.createTable('otp_codes', (table) => {
  table.increments('id');
  table.string('code');
  table.boolean('is_active').defaultTo(1);
  table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  table.dateTime('expired_at').notNullable();
});

exports.down = (knex) => knex.schema.dropTable('otp_codes');
