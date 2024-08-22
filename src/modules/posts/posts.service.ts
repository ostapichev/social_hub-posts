import { Injectable, Logger } from '@nestjs/common';

import { LoggerService } from '../logger/logger.service';
import { ArticleRepository } from '../repository/services/article.repository';
import { CreatePostDto } from './dto/req/create-post.dto';
import { PostsListReqDto } from './dto/req/posts-list.req.dto';
import { UpdatePostDto } from './dto/req/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    private readonly logger: LoggerService,
    private readonly articleRepository: ArticleRepository,
  ) {}

  public async create(dto: CreatePostDto): Promise<any> {
    Logger.log(dto);
    return await this.articleRepository.save({
      title: 'title',
      description: 'description',
      body: 'body',
      user_id: '7417d822-4ce1-412e-a6d1-938f7305c105',
    });
  }

  public async findAll(query: PostsListReqDto): Promise<any> {
    Logger.log(query);
    return `This action returns all posts`;
  }

  public async findOne(id: number): Promise<any> {
    return `This action returns a #${id} post`;
  }

  public async update(id: number, dto: UpdatePostDto): Promise<any> {
    Logger.log(dto);
    return `This action updates a #${id} post`;
  }

  public async remove(id: number): Promise<any> {
    return `This action removes a #${id} post`;
  }
}
