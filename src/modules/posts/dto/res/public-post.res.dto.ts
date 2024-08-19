import { PickType } from '@nestjs/swagger';

import { BasePostResDto } from './base-post.res.dto';

export class PublicPostResDto extends PickType(BasePostResDto, [
  'title',
  'about',
  'tag',
  'createdAt',
]) {}
