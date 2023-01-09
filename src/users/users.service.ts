import { Injectable } from '@nestjs/common';
import { config } from 'src/db/config.db';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const knex = require('knex')(config);
@Injectable()
export class UsersService {
  getUser() {
    try {
      knex.schema.createTable(
        'users',
        (table) => {
          table.increments('id').primary();
          table.string('name');
          table.string('email');
          table.string('password');
        },
      );

      return 'here on my knees to God';
    } catch (error) {
      console.log('Error loading users');
    }
  }
  createUser(name: string, email: string) {
    return `name: ${name}, email: ${email}`;
  }
}
