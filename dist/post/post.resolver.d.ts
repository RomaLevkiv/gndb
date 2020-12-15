import { PostService } from './post.service';
import { PostModel } from './model/post.model';
import { CreatePostDto } from './dto/create-post.dto';
import { GetPostByIdDto } from './dto/get-postById.dto';
export declare class PostResolver {
    private readonly postService;
    constructor(postService: PostService);
    getAllPosts(): Promise<PostModel[]>;
    getPostById(getPostByIdDto: GetPostByIdDto): Promise<PostModel>;
    createPost(createPostDto: CreatePostDto): Promise<PostModel>;
    deletePost(getPostByIdDto: GetPostByIdDto): Promise<PostModel>;
}
