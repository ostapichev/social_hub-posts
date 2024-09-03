import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CommentEntity } from '../../database/entities/comment.entity';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { SkipAuth } from '../auth/decorators/skip-auth.decorator';
import { IUserData } from '../auth/interfaces/user-data.interface';
import { CommentDto } from './dto/req/comment.dto';
import { PrivateCommentResDto } from './dto/res/private-comment.res.dto';
import { CommentMapper } from './services/comment.mapper';
import { CommentsService } from './services/comments.service';

@ApiTags('Comments')
@ApiForbiddenResponse()
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post(':articleId')
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: PrivateCommentResDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  public async create(
    @Body() dto: CommentDto,
    @CurrentUser() userData: IUserData,
    @Param('articleId', new ParseUUIDPipe()) articleId: string,
  ): Promise<CommentEntity> {
    const comment = await this.commentsService.create(dto, userData, articleId);
    return CommentMapper.toResponseDTO(comment);
  }

  @Get(':articleId')
  @SkipAuth()
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  public async findAllArticle(
    @Param('articleId', new ParseUUIDPipe()) articleId: string,
  ) {
    return await this.commentsService.findAllArticle(articleId);
  }

  @Patch(':commentId')
  @ApiBearerAuth()
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  update(
    @Param('commentId', new ParseUUIDPipe()) commentId: string,
    @Body() dto: CommentDto,
  ) {
    return this.commentsService.update(commentId, dto);
  }

  @Delete(':commentId')
  @ApiBearerAuth()
  @ApiNoContentResponse({ description: 'Post has been removed' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  remove(@Param('commentId') commentId: string) {
    return this.commentsService.remove(+commentId);
  }
}
