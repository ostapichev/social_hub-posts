import { Injectable, Logger } from '@nestjs/common';

import { LoggerService } from '../../logger/services/logger.service';
import { FollowRepository } from '../../repository/services/follow.repository';
import { CreateFollowerDto } from '../dto/req/create-follower.dto';
import { UpdateFollowerDto } from '../dto/req/update-follower.dto';

@Injectable()
export class FollowersService {
  constructor(
    private readonly logger: LoggerService,
    private readonly followRepository: FollowRepository,
  ) {}

  public async create(dto: CreateFollowerDto): Promise<any> {
    Logger.log(dto);
    return await this.followRepository.save({
      follower_id: '7417d822-4ce1-412e-a6d1-938f7305c105',
      following_id: '7417d822-4ce1-412e-a6d1-938f7305c105',
    });
  }

  findAll() {
    return `This action returns all followers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} follower`;
  }

  update(id: number, dto: UpdateFollowerDto) {
    Logger.log(dto);
    return `This action updates a #${id} follower`;
  }

  remove(id: number) {
    return `This action removes a #${id} follower`;
  }
}
