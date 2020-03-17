import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { UserPost } from './user-post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPostRepository } from './user-post.repository';

@Injectable()
export class UserPostService {
  constructor(
    @InjectRepository(UserPostRepository)
    private userPostRepository: UserPostRepository,
  ) {}

  async findAllPosts(): Promise<UserPost[]> {
    return await this.userPostRepository.getUserPosts();
  }

  async findPostById(id: number): Promise<UserPost> {
    const foundPost = await this.userPostRepository.findOne(id);

    if (!foundPost) {
      throw new NotFoundException('post not found');
    }

    return foundPost;
  }

  async createPost(createPostDto: CreatePostDto): Promise<UserPost> {
    return this.userPostRepository.createPost(createPostDto);
  }

  async updatePost(
    id: number,
    updatePostDto: UpdatePostDto,
  ): Promise<UserPost> {
    const postToUpdate = await this.findPostById(id);

    for (const key in postToUpdate) {
      if (key in updatePostDto) {
        postToUpdate[key] = updatePostDto[key];
      }
    }

    await postToUpdate.save();
    return await postToUpdate;
  }

  async deletePost(id: number): Promise<void> {
    const postToDelete = await this.findPostById(id);

    try {
      await this.userPostRepository.remove(postToDelete);
    } catch (error) {
      throw new BadRequestException('Something went wrong with the request');
    }
  }
}
