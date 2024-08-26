import { Injectable, Logger } from '@nestjs/common';

import { LoggerService } from '../logger/logger.service';
import { UserRepository } from '../repository/services/user.repository';
import { CreateUserDto } from './dto/req/create-user.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly logger: LoggerService,
    private readonly userRepository: UserRepository,
  ) {}

  public async create(dto: CreateUserDto): Promise<any> {
    Logger.log(dto);
    return await this.userRepository.save(dto);
  }

  public async findAll(): Promise<any> {
    return `This action returns all users`;
  }

  public async findMe(id: number): Promise<any> {
    return `This action returns a #${id} user`;
  }

  public async updateMe(id: number, dto: UpdateUserDto): Promise<any> {
    Logger.log(dto);
    return `This action updates a #${id} user`;
  }

  public async removeMe(id: number): Promise<any> {
    return `This action removes a #${id} user`;
  }

  public async findOne(id: number): Promise<any> {
    return `This action returns a #${id} user`;
  }
}
