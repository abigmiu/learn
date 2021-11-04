import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
@Controller('user')
export class UserController {
  constructor(private readonly authService: AuthService, private readonly userServices: UserService) {}

  @Post('find-one')
  findOne(@Body() body: any) {
    return this.userServices.findOne(body.username);
  }

  @Post('register')
  async register(@Body() body: any) {
      return await this.userServices.register(body)
  }

  @Post('login')
  async login(@Body() loginParams: any) {
      const authResult = await this.authService.validateUser(loginParams.username, loginParams.password)
    //   switch (authResult.code) {
    //     case 1:
    //         return this.authService().cer
    //   }


  }
}
