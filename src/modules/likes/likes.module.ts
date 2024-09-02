import { Module } from '@nestjs/common';

import { LikesController } from './likes.controller';
import { LikesService } from './services/likes.service';

@Module({
  controllers: [LikesController],
  providers: [LikesService],
  exports: [LikesService],
})
export class LikesModule {}
