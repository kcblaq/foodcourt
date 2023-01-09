// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_CON,
    pool: {
      min: 0,
      max: 15,
    },
    migrations: {
      directory: '/migrations',
    },
    seeds: {
      directory: '/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_CON,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
