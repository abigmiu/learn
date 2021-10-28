import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userServices: UserService) {}

  @Post('find-one')
  findOne(@Body() body: any) {
    return this.userServices.findOne(body.username);
  }
}
