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

import { CreateTagDto } from './dto/req/create-tag.dto';
import { UpdateTagDto } from './dto/req/update-tag.dto';
import { PublicTagResDto } from './dto/res/public-tag.res.dto';
import { TagsService } from './tags.service';

@ApiTags('Tags')
@ApiForbiddenResponse()
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  @ApiCreatedResponse({ type: PublicTagResDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  public async create(
    @Req() req: Request,
    @Body() dto: CreateTagDto,
  ): Promise<PublicTagResDto> {
    return await this.tagsService.create(dto);
  }

  @Get()
  public async findAll(): Promise<PublicTagResDto[]> {
    return await this.tagsService.findAll();
  }

  @Get(':tagId')
  public async findOne(
    @Param(':tagId') tagId: string,
  ): Promise<PublicTagResDto> {
    return await this.tagsService.findOne(+tagId);
  }

  @Patch(':tagId')
  public async update(
    @Param('tagId') tagId: string,
    @Body() dto: UpdateTagDto,
  ): Promise<PublicTagResDto> {
    return await this.tagsService.update(+tagId, dto);
  }

  @Delete(':tagId')
  public async remove(@Param('tagId') tagId: string): Promise<void> {
    return await this.tagsService.remove(+tagId);
  }
}
