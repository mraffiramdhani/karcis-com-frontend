/* eslint-disable prefer-template */
/* eslint-disable no-path-concat */
// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: '52.22.124.137',
      database: 'karcis',
      user: 'root',
      password: ''
    },
    migrations: {
      directory: __dirname + '/Database/Migrations'
    },
    seeds: {
      directory: __dirname + '/Database/Seeds'
    }
  },

  staging: {
    client: 'mysql2',
    connection: {
      database: 'karcis',
      user: 'admin',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      database: 'karcis',
      user: 'admin',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
