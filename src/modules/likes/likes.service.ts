import { Injectable, Logger } from '@nestjs/common';

import { CreateLikeDto } from './dto/req/create-like.dto';

@Injectable()
export class LikesService {
  create(dto: CreateLikeDto) {
    Logger.log(dto);
    return 'This action adds a new like';
  }

  findAll() {
    return `This action returns all likes`;
  }

  remove(id: number) {
    return `This action removes a #${id} like`;
  }
}
