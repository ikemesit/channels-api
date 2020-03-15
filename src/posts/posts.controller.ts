import { Controller, Get, Inject } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(@Inject(PostsService) private postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }
}
