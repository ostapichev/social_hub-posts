import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
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
  Delete,
  Req,
} from '@nestjs/common';

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
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @Post()
  public async create(
    @Req() req: Request,
    @Body() dto: CreateUserDto
  ): Promise<PrivateUserResDto> {
    return await this.usersService.create(dto);
  }

  @Get()
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  public async findAll(): Promise<PublicUserResDto[]> {
    return await this.usersService.findAll();
  }

  @ApiBearerAuth()
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @Get('me')
  public async findMe(): Promise<PrivateUserResDto> {
    return await this.usersService.findMe(1);
  }

  @ApiBearerAuth()
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiConflictResponse({ description: 'Conflict' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Patch('me')
  public async updateMe(@Body() dto: UpdateUserDto): Promise<PrivateUserResDto> {
    return await this.usersService.updateMe(1, dto);
  }

  @ApiNoContentResponse({ description: 'User has been removed' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Delete('me')
  public async removeMe(): Promise<void> {
    return await this.usersService.removeMe(1);
  }

  @Get(':userId')
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  public async findOne(
    @Param('userId') id: string
  ): Promise<PublicUserResDto> {
    return await this.usersService.findOne(+id);
  }
}
