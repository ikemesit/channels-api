import {
  Controller,
  Get,
  Post,
  Inject,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserPostService } from './user-post.service';
import { UserPost } from './user-post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class UserPostController {
  constructor(
    @Inject(UserPostService) private userPostService: UserPostService,
  ) {}

  @Get()
  findAll(): Promise<UserPost[]> {
    return this.userPostService.findAllPosts();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<UserPost> {
    return this.userPostService.findPostById(Number(id));
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.userPostService.createPost(createPostDto);
  }

  @Patch(':id')
  update(
    @Body() updatePostDto: UpdatePostDto,
    @Param('id') id: string,
  ): Promise<UserPost> {
    return this.userPostService.updatePost(Number(id), updatePostDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.userPostService.deletePost(Number(id));
  }
}
