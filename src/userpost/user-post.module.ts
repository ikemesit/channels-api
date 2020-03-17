import { Module } from '@nestjs/common';
import { UserPostController } from './user-post.controller';
import { UserPostService } from './user-post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPostRepository } from './user-post.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserPostRepository])],
  controllers: [UserPostController],
  providers: [UserPostService],
})
export class UserPostModule {}
