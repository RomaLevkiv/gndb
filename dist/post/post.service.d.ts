import { CreatePostDto } from './dto/create-post.dto';
import { GetPostByIdDto } from './dto/get-postById.dto';
import { PostEntity } from './post.entity';
import { PostRepository } from './post.repository';
export declare class PostService {
    private postRepository;
    constructor(postRepository: PostRepository);
    getPostById(getPostByIdDto: GetPostByIdDto): Promise<PostEntity>;
    getAllPosts(): Promise<PostEntity[]>;
    createPost(createPostDto: CreatePostDto): Promise<PostEntity>;
    deletePost(getPostById: GetPostByIdDto): Promise<PostEntity>;
}
