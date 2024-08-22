import { PickType } from '@nestjs/swagger';

import { BaseCommentResDto } from './base-comment.res.dto';

export class PublicCommentResDto extends PickType(BaseCommentResDto, [
  'body',
  'article_id',
  'user_id',
  'updatedAt',
]) {}
