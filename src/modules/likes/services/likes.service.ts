import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { LikeEntity } from '../../../database/entities/like.entity';
import { IUserData } from '../../auth/interfaces/user-data.interface';
import { ArticleRepository } from '../../repository/services/article.repository';
import { LikeRepository } from '../../repository/services/like.repository';
import { LikeDto } from '../dto/req/like.dto';

@Injectable()
export class LikesService {
  constructor(
    private readonly likeRepository: LikeRepository,
    private readonly articleRepository: ArticleRepository,
  ) {}

  public async create(userData: IUserData, dto: LikeDto): Promise<LikeEntity> {
    const isArticle = await this.likeRepository.findOne({
      where: { article_id: dto.article_id },
    });
    const isUser = await this.likeRepository.findOne({
      where: { user_id: userData.userId },
    });
    if (isArticle && isUser) {
      throw new ConflictException('For this article like is created!');
    }
    return await this.likeRepository.save({
      user_id: userData.userId,
      article_id: dto.article_id,
    });
  }

  public async isUserLike(
    articleId: string,
    userData: IUserData,
  ): Promise<boolean> {
    const article = await this.likeRepository.findOne({
      where: { article_id: articleId, user_id: userData.userId },
    });
    return !!article;
  }

  public async findLikesArticle(articleId: string): Promise<number> {
    const article = await this.articleRepository.findOne({
      where: { id: articleId },
    });
    if (!article) {
      throw new NotFoundException('The article does not exist');
    }
    return await this.likeRepository.count({
      where: { article_id: articleId },
    });
  }

  public async remove(userData: IUserData, likeId: string): Promise<void> {
    const like = await this.likeRepository.findOne({ where: { id: likeId } });
    if (!like) {
      throw new NotFoundException(`Like with id ${likeId} not found`);
    }
    if (like.user_id !== userData.userId) {
      throw new ConflictException('You cannot follow yourself');
    }
    await this.likeRepository.delete(likeId);
  }
}
