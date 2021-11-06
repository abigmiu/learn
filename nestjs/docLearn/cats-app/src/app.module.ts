import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
    configure(comsumer: MiddlewareConsumer) {
        comsumer
            .apply(LoggerMiddleware)
            .forRoutes({
                path: 'cats',
                method: RequestMethod.GET
            })
    }
}
