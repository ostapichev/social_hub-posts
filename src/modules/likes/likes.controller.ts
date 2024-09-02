import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';

import { LikeEntity } from '../../database/entities/like.entity';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { SkipAuth } from '../auth/decorators/skip-auth.decorator';
import { IUserData } from '../auth/interfaces/user-data.interface';
import { LikeDto } from './dto/req/like.dto';
import { LikeResDto } from './dto/res/like.res.dto';
import { LikesService } from './services/likes.service';

@ApiTags('Likes')
@ApiForbiddenResponse()
@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @ApiBearerAuth()
  @ApiCreatedResponse({ type: LikeResDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @Post()
  public async create(
    @CurrentUser() userData: IUserData,
    @Body() dto: LikeDto,
  ): Promise<LikeEntity> {
    return await this.likesService.create(userData, dto);
  }

  @ApiBearerAuth()
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @Get(':articleId/user')
  public async isUserLike(
    @Param('articleId', new ParseUUIDPipe()) articleId: string,
    @CurrentUser() userData: IUserData,
  ): Promise<boolean> {
    return await this.likesService.isUserLike(articleId, userData);
  }

  @SkipAuth()
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @Get(':articleId')
  async findLikesArticle(
    @Param('articleId', new ParseUUIDPipe()) articleId: string,
  ): Promise<number> {
    return await this.likesService.findLikesArticle(articleId);
  }

  @ApiBearerAuth()
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiNoContentResponse({ description: 'Like has been removed' })
  @ApiNotFoundResponse({ description: 'Bad request' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':likeId')
  remove(
    @CurrentUser() userData: IUserData,
    @Param('likeId', new ParseUUIDPipe()) likeId: string,
  ) {
    return this.likesService.remove(userData, likeId);
  }
}
