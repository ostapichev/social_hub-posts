import { PickType } from '@nestjs/swagger';

import { BasePostResDto } from './base-post.res.dto';

export class PrivatePostResDto extends PickType(BasePostResDto, [
  'title',
  'about',
  'body',
  'tag',
  'createdAt',
  'updatedAt',
]) {}
