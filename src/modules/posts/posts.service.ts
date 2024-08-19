import { Injectable } from '@nestjs/common';

import { CreatePostDto } from './dto/req/create-post.dto';
import { UpdatePostDto } from './dto/req/update-post.dto';
import { PostsListReqDto } from './dto/req/posts-list.req.dto';

@Injectable()
export class PostsService {
  public async create(createPostDto: CreatePostDto): Promise<any> {
    return 'This action adds a new post';
  }

  public async findAll(query: PostsListReqDto): Promise<any> {
    return `This action returns all posts`;
  }

  public async findOne(id: number): Promise<any> {
    return `This action returns a #${id} post`;
  }

  public async update(id: number, updatePostDto: UpdatePostDto): Promise<any> {
    return `This action updates a #${id} post`;
  }

  public async remove(id: number): Promise<any> {
    return `This action removes a #${id} post`;
  }
}
