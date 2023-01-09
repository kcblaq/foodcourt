/* eslint-disable @typescript-eslint/no-var-requires */
export const config = {
  client: 'pg',
  connection: process.env.DB_CON,
};

const con = process.env.DB_CON;

export const pg = require('knex')({
  client: 'pg',
  connection: con,
  searchPath: ['knex', 'public'],
});

export const NewTable = pg.schema
  .createTable('test', (table) => {
    table.increments('id');
    table.string('name');
    table.string('email');
    table.string('password');
    table.timestamp('created_at');
    table.timestamp('updated_at');
    table.integer('age');
  })
  .then(() => console.log('Table created'))
  .catch((err) => console.log(err));

export const NewUser = function (knex) {
  return knex.schema.createTable(
    'users',
    (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table
        .string('avatar')
        .defaultTo(
          'https://i.imgur.com/Xq2bZCY.png',
        );
      table
        .string('bio')
        .defaultTo('I am a new user');
      table
        .timestamp('created_at')
        .defaultTo(knex.fn.now());
      table
        .timestamp('updated_at')
        .defaultTo(knex.fn.now());
    },
  );
};
