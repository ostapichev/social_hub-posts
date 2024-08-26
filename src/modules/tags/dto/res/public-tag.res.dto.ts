import { PickType } from '@nestjs/swagger';

import { BaseTagResDto } from './base-tag.res.dto';

export class PublicTagResDto extends PickType(BaseTagResDto, [
  'name',
  'articles',
]) {}
