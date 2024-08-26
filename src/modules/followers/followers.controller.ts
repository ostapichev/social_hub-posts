import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CreateFollowerDto } from './dto/req/create-follower.dto';
import { UpdateFollowerDto } from './dto/req/update-follower.dto';
import { PublicFollowResDto } from './dto/res/public-follow.res.dto';
import { FollowersService } from './followers.service';

@ApiTags('Followers')
@ApiForbiddenResponse()
@Controller('followers')
export class FollowersController {
  constructor(private readonly followersService: FollowersService) {}

  @ApiCreatedResponse({ type: PublicFollowResDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Post()
  public async create(
    @Req() req: Request,
    @Body() createFollowerDto: CreateFollowerDto,
  ): Promise<PublicFollowResDto> {
    return await this.followersService.create(createFollowerDto);
  }

  @Get()
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  findAll() {
    return this.followersService.findAll();
  }

  @Get(':followersId')
  findOne(@Param('followersId') followersId: string) {
    return this.followersService.findOne(+followersId);
  }

  @Patch(':followersId')
  update(
    @Param('followersId') followersId: string,
    @Body() updateFollowerDto: UpdateFollowerDto,
  ) {
    return this.followersService.update(+followersId, updateFollowerDto);
  }

  @Delete(':followersId')
  remove(@Param('followersId') followersId: string) {
    return this.followersService.remove(+followersId);
  }
}
