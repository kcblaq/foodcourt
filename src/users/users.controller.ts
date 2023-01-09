import { CreateUserDto } from './dto/create-user.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
// import {
//   CreateUser,
//   NewTable,
// } from 'src/db/config.db';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) {}

  @Get()
  getAll() {
    return this.usersService.getUser();
  }

  @Post('dropusertable')
  dropUserTable() {
    return this.usersService.dropUserTable();
  }

  @Post('createusertable')
  createUserTable() {
    return this.usersService.userTable;
  }

  @Get(':id')
  getOne(@Param() param): string {
    return `Here is user ${param.id}`;
  }

  @Post()
  postUser(@Body() dto: CreateUserDto): Promise<{
    name: string;
    email: string;
    password: string;
    role: string;
  }> {
    return this.usersService.createUser(dto);
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
