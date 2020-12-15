import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from './post.entity';
export declare class PostRepository extends Repository<PostEntity> {
    createPost(createPostDto: CreatePostDto): Promise<PostEntity>;
}
