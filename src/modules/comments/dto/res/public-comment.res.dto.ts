import { PickType } from '@nestjs/swagger';

import { BaseCommentResDto } from './base-comment.res.dto';

export class PublicCommentResDto extends PickType(BaseCommentResDto, [
  'id',
  'body',
  'title',
  'user_id',
  'article_id',
  'created',
  'updated',
]) {}
