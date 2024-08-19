import { ApiProperty } from '@nestjs/swagger';

export class BasePostResDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty({ example: 'title' })
  title: string;

  @ApiProperty({ example: 'content' })
  about: string;

  @ApiProperty({ example: 'body' })
  body: string;

  @ApiProperty({ example: 'tag' })
  tag?: string;

  createdAt: Date;

  updatedAt: Date;
}
