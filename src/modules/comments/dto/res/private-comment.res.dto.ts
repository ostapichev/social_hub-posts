import { PickType } from '@nestjs/swagger';

import { BaseCommentResDto } from './base-comment.res.dto';

export class PrivateCommentResDto extends PickType(BaseCommentResDto, [
  'id',
  'body',
  'article_id',
  'user_id',
  'created',
  'updated',
]) {}
