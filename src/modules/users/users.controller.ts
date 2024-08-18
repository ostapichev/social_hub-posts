import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete } from '@nestjs/common';

import { CreateUserDto } from './dto/req/create-user.dto';
import { PrivateUserResDto } from './dto/res/private-user.res.dto';
import { PublicUserResDto } from './dto/res/public-user.res.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCreatedResponse({ type: PrivateUserResDto })
  @Post()
  public async create(@Body() dto: CreateUserDto): Promise<any> {
    return await this.usersService.create(dto);
  }

  @Get()
  public async findAll(): Promise<PublicUserResDto[]> {
    return await this.usersService.findAll();
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Get('me')
  public async findMe(): Promise<PrivateUserResDto> {
    return await this.usersService.findMe(1);
  }

  @ApiBearerAuth()
  @ApiConflictResponse({ description: 'Conflict' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Patch('me')
  public async updateMe(@Body() dto: UpdateUserDto): Promise<PrivateUserResDto> {
    return await this.usersService.updateMe(1, dto);
  }

  @ApiNoContentResponse({ description: 'User has been removed' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Delete('me')
  public async removeMe(): Promise<void> {
    return await this.usersService.removeMe(1);
  }

  @Get(':userId')
  public async findOne(@Param('userId') id: string): Promise<PublicUserResDto> {
    return await this.usersService.findOne(+id);
  }
}
