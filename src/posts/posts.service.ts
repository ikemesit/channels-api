import { Injectable } from '@nestjs/common';
import { Post } from './model/post.model';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      id: 1,
      dateCreated: `${Date.now()}`,
      title: `The futility of resistance`,
      body: `lLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus eget est vel gravida. Curabitur id vestibulum turpis. Curabitur finibus consequat dolor, nec tempor velit varius quis. Morbi maximus libero mauris, ut finibus eros pharetra vel. Aliquam varius tellus nec leo tempor, in ultricies sem molestie. Etiam quis dignissim ligula. Integer justo tellus, maximus in vulputate at, posuere et sem. Vestibulum hendrerit ut sapien sit amet lacinia. Duis tristique justo vitae pellentesque rutrum. Aenean malesuada erat urna, ac interdum eros commodo vitae. Nunc accumsan dolor vel lectus tincidunt molestie.`,
      tags: `lipsum, text, body`,
      user: `ikem`,
    },
  ];
  constructor() {}

  async findAll(): Promise<Post[]> {
    return await this.posts;
  }
}
