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
  ApiNoContentResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/req/create-comment.dto';
import { UpdateCommentDto } from './dto/req/update-comment.dto';
import { PrivateCommentResDto } from './dto/res/private-comment.res.dto';

@ApiTags('Comments')
@ApiForbiddenResponse()
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiCreatedResponse({ type: PrivateCommentResDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Post()
  public async create(
    @Req() req: Request,
    @Body() dto: CreateCommentDto,
  ): Promise<PrivateCommentResDto> {
    return await this.commentsService.create(dto);
  }

  @Get()
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  public async findAll() {
    return await this.commentsService.findAll();
  }

  @Get(':commentId')
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  public async findOne(@Param('commentId') commentId: string) {
    return await this.commentsService.findOne(+commentId);
  }

  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @Patch(':commentId')
  update(@Param('commentId') commentId: string, @Body() dto: UpdateCommentDto) {
    return this.commentsService.update(+commentId, dto);
  }

  @ApiNoContentResponse({ description: 'Post has been removed' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Delete(':commentId')
  remove(@Param('commentId') commentId: string) {
    return this.commentsService.remove(+commentId);
  }
}
