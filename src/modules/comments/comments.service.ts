import { Injectable, Logger, NotFoundException } from '@nestjs/common';

import { CommentEntity } from '../../database/entities/comment.entity';
import { IUserData } from '../auth/interfaces/user-data.interface';
import { ArticleRepository } from '../repository/services/article.repository';
import { CommentRepository } from '../repository/services/comment.repository';
import { CommentDto } from './dto/req/comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly articleRepository: ArticleRepository,
  ) {}

  public async create(
    dto: CommentDto,
    user: IUserData,
    articleId: string,
  ): Promise<CommentEntity> {
    const article = await this.articleRepository.findOne({
      where: { id: articleId },
    });
    if (!article) {
      throw new NotFoundException('The article does not exist');
    }
    return await this.commentRepository.save({
      body: dto.body,
      article_id: articleId,
      user_id: user.userId,
    });
  }

  public async findAllArticle(articleId: string): Promise<CommentEntity[]> {
    const article = await this.commentRepository.findOne({
      where: { article_id: articleId },
    });
    if (!article) {
      throw new NotFoundException('The article does not exist');
    }
    return await this.commentRepository.find({
      where: { article_id: articleId },
      relations: { user: true },
    });
  }

  public async update(
    commentId: string,
    dto: CommentDto,
  ): Promise<CommentEntity> {
    const comment = await this.commentRepository.findOneBy({ id: commentId });
    if (!comment) {
      throw new NotFoundException('The comment does not exist');
    }
    Logger.log(comment);
    this.commentRepository.merge(comment, dto);
    return await this.commentRepository.save(comment);
  }

  public async remove(id: number): Promise<any> {
    return `This action removes a #${id} comment`;
  }
}
