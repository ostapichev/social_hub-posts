import { ApiProperty } from '@nestjs/swagger';

export class BasePostResDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty({ example: 'title' })
  title: string;

  @ApiProperty({ example: 'content' })
  description: string;

  @ApiProperty({ example: 'body' })
  body: string;

  @ApiProperty({ example: 'tag' })
  tags?: string[];

  @ApiProperty({ example: '232esid232343' })
  user_id: string;

  createdAt: Date;

  updatedAt: Date;
}
