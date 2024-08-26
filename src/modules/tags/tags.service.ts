import { Injectable, Logger } from '@nestjs/common';

import { LoggerService } from '../logger/logger.service';
import { TagRepository } from '../repository/services/tag.repository';
import { CreateTagDto } from './dto/req/create-tag.dto';
import { UpdateTagDto } from './dto/req/update-tag.dto';

@Injectable()
export class TagsService {
  constructor(
    private readonly logger: LoggerService,
    private readonly tagRepository: TagRepository,
  ) {}

  public async create(dto: CreateTagDto): Promise<any> {
    Logger.log(dto);
    return await this.tagRepository.save({
      name: 'tag',
    });
  }

  public async findAll(): Promise<any> {
    return `This action returns all tags`;
  }

  public async findOne(id: number): Promise<any> {
    return `This action returns a #${id} tag`;
  }

  public async update(id: number, dto: UpdateTagDto): Promise<any> {
    Logger.log(dto);
    return `This action updates a #${id} tag`;
  }

  public async remove(id: number): Promise<any> {
    return `This action removes a #${id} tag`;
  }
}
