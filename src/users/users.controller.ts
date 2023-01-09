import { Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  NewTable,
  NewUser,
} from 'src/db/config.db';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) {}

  @Get()
  getAll() {
    console.log('What if I do it');
    return this.usersService.getUser();
  }
  @Get(':id')
  getOne(@Param() param): string {
    return `Here is user ${param.id}`;
  }

  @Post()
  postUser(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(
      dto.name,
      dto.email,
    );
  }

  @Post('/test')
  test() {
    return NewUser;
  }
  @Delete(':id')
  deleteUser(@Param('id') id) {
    return `Item ${id} has been deleted`;
  }
  @Put(':id')
  updateUser(
    @Body() updatedto: CreateUserDto,
    @Param('id') id: string,
  ) {
    return `Item ${id} has been updated with ${updatedto.name} and ${updatedto.email}`;
  }
}
