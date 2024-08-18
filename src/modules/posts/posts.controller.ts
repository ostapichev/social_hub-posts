import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';

import { CreatePostDto } from './dto/req/create-post.dto';
import { PostsService } from './posts.service';
import { UpdatePostDto } from './dto/req/update-post.dto';
import { PostsListReqDto } from './dto/req/posts-list.req.dto';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  public async create(@Body() dto: CreatePostDto): Promise<any> {
    return await this.postsService.create(dto);
  }

  @Get()
  public async findAll(@Query() query: PostsListReqDto): Promise<any> {
    return await this.postsService.findAll(query);
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<any> {
    return await this.postsService.findOne(+id);
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() dto: UpdatePostDto): Promise<any> {
    return await this.postsService.update(+id, dto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<any> {
    return await this.postsService.remove(+id);
  }
}
