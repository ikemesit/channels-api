import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormConfig } from './config/typeorm.config';
import { UserPostModule } from './userpost/user-post.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), UserPostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
