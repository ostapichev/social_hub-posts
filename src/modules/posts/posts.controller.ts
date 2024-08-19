import {
  ApiBadRequestResponse,
  ApiCreatedResponse, ApiForbiddenResponse,
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
  Query,
} from '@nestjs/common';

import { CreatePostDto } from './dto/req/create-post.dto';
import { PostsService } from './posts.service';
import { UpdatePostDto } from './dto/req/update-post.dto';
import { PostsListReqDto } from './dto/req/posts-list.req.dto';
import { PublicPostResDto } from './dto/res/public-post.res.dto';
import { PrivatePostResDto } from './dto/res/private-post.res.dto';

@ApiTags('Posts')
@ApiForbiddenResponse()
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiCreatedResponse({ type: PrivatePostResDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Post()
  public async create(@Body() dto: CreatePostDto): Promise<PublicPostResDto> {
    return await this.postsService.create(dto);
  }

  @Get()
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  public async findAll(
    @Query() query: PostsListReqDto): Promise<PublicPostResDto[]> {
    return await this.postsService.findAll(query);
  }

  @Get(':postId')
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  public async findOne(
    @Param('postId') postId: string): Promise<PrivatePostResDto> {
    return await this.postsService.findOne(+postId);
  }

  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @Patch(':postId')
  public async update(
    @Param('postId') postId: string,
    @Body() dto: UpdatePostDto): Promise<PrivatePostResDto> {
    return await this.postsService.update(+postId, dto);
  }

  @ApiNoContentResponse({ description: 'Post has been removed' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Delete(':postId')
  public async remove(@Param('postId') postId: string): Promise<void> {
    return await this.postsService.remove(+postId);
  }
}
