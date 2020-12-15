import { EntityRepository, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from './post.entity';

@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
  async createPost(createPostDto: CreatePostDto): Promise<PostEntity> {
    const { message, length, author } = createPostDto;

    const post = new PostEntity();
    post.message = message;
    post.length = length;
    post.author = author;
    await post.save();

    return post;
  }
}
