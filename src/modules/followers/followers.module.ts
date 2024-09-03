import { Module } from '@nestjs/common';

import { FollowersController } from './followers.controller';
import { FollowersService } from './services/followers.service';

@Module({
  controllers: [FollowersController],
  providers: [FollowersService],
})
export class FollowersModule {}
