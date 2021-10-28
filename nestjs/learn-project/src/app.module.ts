import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller'
import { UserService } from './logical/user/user.service';
import { UserController } from './logical/user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
