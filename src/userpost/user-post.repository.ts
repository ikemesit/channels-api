import { EntityRepository, Repository } from 'typeorm';
import { UserPost } from './user-post.entity';
import { CreatePostDto } from './dto/create-post.dto';

@EntityRepository(UserPost)
export class UserPostRepository extends Repository<UserPost> {
  async getUserPosts() {
    const query = this.createQueryBuilder('userPost');
    const posts = await query.getMany();
    return posts;
  }

  async createPost(createPostDto: CreatePostDto) {
    const { title, body, dateCreated, tags, userId } = createPostDto;
    const newPost = new UserPost();

    newPost.title = title;
    newPost.body = body;
    newPost.dateCreated = dateCreated;
    newPost.tags = tags;
    newPost.userId = userId;

    await newPost.save();
    return newPost;
  }
}
