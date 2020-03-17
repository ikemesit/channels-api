import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormConfig } from './config/typeorm.config';
import { UserPostsModule } from './userposts/user-posts.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), UserPostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
