import { Injectable, Logger } from '@nestjs/common';

import { LoggerService } from '../logger/logger.service';
import { CommentRepository } from '../repository/services/comment.repository';
import { CreateCommentDto } from './dto/req/create-comment.dto';
import { UpdateCommentDto } from './dto/req/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    private readonly logger: LoggerService,
    private readonly commentRepository: CommentRepository,
  ) {}

  public async create(dto: CreateCommentDto): Promise<any> {
    Logger.log(dto);
    return await this.commentRepository.save({
      body: 'Text text',
      article_id: '3eb02eca-1459-4197-b889-7959faeeb141',
      user_id: '7417d822-4ce1-412e-a6d1-938f7305c105',
    });
  }

  public async findAll(): Promise<any> {
    return `This action returns all comments`;
  }

  public async findOne(id: number): Promise<any> {
    return `This action returns a #${id} comment`;
  }

  public async update(id: number, dto: UpdateCommentDto): Promise<any> {
    Logger.log(dto);
    return `This action updates a #${id} comment`;
  }

  public async remove(id: number): Promise<any> {
    return `This action removes a #${id} comment`;
  }
}
