import { PickType } from '@nestjs/swagger';

import { BaseFollowerResDto } from './base-follow.res.dto';

export class PublicFollowResDto extends PickType(BaseFollowerResDto, [
  'id',
  'follower_id',
  'following_id',
]) {}
