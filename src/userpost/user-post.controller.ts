import {
  Controller,
  Get,
  Post,
  Inject,
  Param,
  Body,
  Patch,
  Delete,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
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
  findById(@Param('id', ParseIntPipe) id: number): Promise<UserPost> {
    return this.userPostService.findPostById(id);
  }

  @Post()
  // @UsePipes(ValidationPipe)
  create(@Body() createPostDto: CreatePostDto) {
    return this.userPostService.createPost(createPostDto);
  }

  @Patch(':id')
  update(
    @Body() updatePostDto: UpdatePostDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserPost> {
    return this.userPostService.updatePost(id, updatePostDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.userPostService.deletePost(id);
  }
}
