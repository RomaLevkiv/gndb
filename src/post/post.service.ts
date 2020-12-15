import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { GetPostByIdDto } from './dto/get-postById.dto';
// import { CreatePostDto } from './dto/create-post.dto';
import { PostModel } from './model/post.model';
import { PostEntity } from './post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostRepository)
    private postRepository: PostRepository,
  ) {}

  async getPostById(getPostByIdDto: GetPostByIdDto): Promise<PostEntity> {
    const { id } = getPostByIdDto;
    const found = await this.postRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Post with id: ${id} not found`);
    }
    return found;
  }

  async getAllPosts(): Promise<PostEntity[]> {
    const posts = await this.postRepository.find();
    if (!posts.length) {
      throw new NotFoundException(`Don't have posts yet`);
    }
    return posts;
  }

  async createPost(createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postRepository.createPost(createPostDto);
  }

  async deletePost(getPostById: GetPostByIdDto): Promise<PostEntity> {
    const delPost = await this.getPostById(getPostById);
    if (delPost) {
      this.postRepository.delete(delPost.id);
      return delPost;
    }
  }
}
