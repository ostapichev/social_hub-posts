import { ApiProperty } from '@nestjs/swagger';

export class BaseCommentResDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty({ example: 'text text' })
  body: string;

  @ApiProperty({ example: '34343jskwe4344' })
  article_id: string;

  @ApiProperty({ example: '232mdds23' })
  user_id: string;

  createdAt: Date;

  updatedAt: Date;
}
