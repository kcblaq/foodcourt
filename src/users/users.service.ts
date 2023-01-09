import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const con = process.env.DB_CON;
// eslint-disable-next-line @typescript-eslint/no-var-requires
export const pg = require('knex')({
  client: 'pg',
  connection: con,
  searchPath: ['knex', 'public'],
});

@Injectable()
export class UsersService {
  [x: string]: any;
  async getUser() {
    try {
      const user = await pg.table('users');
      return user;
    } catch (error) {
      console.log('Error loading users');
    }
  }

  async createUser(createUserDto: CreateUserDto) {
    try {
      const { name, email, password, role, age } =
        createUserDto;
      const newUser = await pg
        .table('users')
        .insert({
          name,
          email,
          password,
          role,
          age,
        });
      return newUser;
    } catch (error) {
      console.log(error.message);
    }
  }

  userTable = pg.schema
    .createTable('users', (table) => {
      table.increments('id');
      table.string('name');
      table.string('email').unique().notNull();
      table.string('password');
      table.string('role');
      table.integer('age');
      table.timestamp('created_at');
    })
    .then(() => console.log('User Table created'))
    .catch((err: any) => console.log(err));
}
