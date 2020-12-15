import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { PostModel } from './model/post.model';
import { CreatePostDto } from './dto/create-post.dto';
import { GetPostByIdDto } from './dto/get-postById.dto';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [PostModel])
  async getAllPosts(): Promise<PostModel[]> {
    return await this.postService.getAllPosts();
  }

  @Query(() => PostModel)
  async getPostById(
    @Args() getPostByIdDto: GetPostByIdDto,
  ): Promise<PostModel> {
    return await this.postService.getPostById(getPostByIdDto);
  }

  @Mutation(() => PostModel)
  async createPost(@Args() createPostDto: CreatePostDto): Promise<PostModel> {
    return await this.postService.createPost(createPostDto);
  }

  @Mutation(() => PostModel)
  async deletePost(@Args() getPostByIdDto: GetPostByIdDto): Promise<PostModel> {
    return await this.postService.deletePost(getPostByIdDto);
  }
}
