import { CommentEntity } from '../../../database/entities/comment.entity';
import { IUserData } from '../../auth/interfaces/user-data.interface';
import { CommentDto } from '../dto/req/comment.dto';
import { PublicCommentResDto } from '../dto/res/public-comment.res.dto';

export class CommentMapper {
  public static toResponseListDTO(
    entities: CommentEntity[],
    user: IUserData,
    query: CommentDto,
  ): CommentDto {
    return {
      body: entities.map(this.toResponseDTO),
      ...query,
    };
  }

  public static toResponseDTO(entity: CommentEntity): PublicCommentResDto {
    return {
      id: entity.id,
      body: entity.body,
      user_id: entity.user_id,
      article_id: entity.article_id,
      created: entity.created,
      updated: entity.updated,
    };
  }
}
