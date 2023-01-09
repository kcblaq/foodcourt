import { knex } from 'knex';
/* eslint-disable @typescript-eslint/no-var-requires */
// import { ConfigModule } from '@nestjs/config';

// ConfigModule.forRoot();
import { CreateUserDto } from 'src/users/dto/create-user.dto';
require('dotenv').config();
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
  .createTable(
    'users',
    (table: {
      increments: (arg0: string) => void;
      string: (arg0: string) => void;
      timestamp: (arg0: string) => void;
      integer: (arg0: string) => void;
    }) => {
      table.increments('id');
      table.string('name');
      table.string('email');
      table.string('password');
      table.string('role');
      table.integer('age');
      table.timestamp('created_at');
    },
  )
  .then(() => console.log('Table created'))
  .catch((err: any) => console.log(err));

export const CreateUser =
  async function CreateUser(
    createUserDto: CreateUserDto,
  ) {
    try {
      await pg.schema.table('users').insert({
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
        role: createUserDto.role,
        age: createUserDto.age,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const dropTable =
  pg.schema.dropTable('test1');
