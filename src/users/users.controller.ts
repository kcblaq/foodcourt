import { Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  people() {
    return 'Here is all the users';
  }
  @Get(':id')
  Single(@Param() param): string {
    return `Here is user ${param.id}`;
  }

  @Post()
  postUser(@Body() dto: CreateUserDto) {
    return dto.name;
  }

  @Delete(':id')
  deleteUser(@Param('id') id) {
    return `Item ${id} has been deleted`;
  }
  @Put(':id')
  updateUser(@Body() updatedto: CreateUserDto, @Param('id') id: string) {
    return `Item ${id} has been updated with ${updatedto.name} and ${updatedto.email}`;
  }
}
