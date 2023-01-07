import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { CategoryController } from './category/category.controller';
import { AddonController } from './addon/addon.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    CategoryController,
    AddonController,
    UsersController,
  ],
  providers: [AppService, UsersService],
})
export class AppModule {}
