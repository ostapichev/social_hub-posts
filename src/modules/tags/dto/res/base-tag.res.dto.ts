import { ApiProperty } from '@nestjs/swagger';

export class BaseTagResDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty({ example: 'tags' })
  name: string;

  @ApiProperty({ example: 'articles-1' })
  articles: string;

  createdAt: Date;

  updatedAt: Date;
}
