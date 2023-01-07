import { Controller, Get, Post } from '@nestjs/common';

@Controller('addon')
export class AddonController {
  @Get()
  Check() {
    return 'Addon seen';
  }
  @Post()
  Add() {
    return 'Addon added';
  }
}
