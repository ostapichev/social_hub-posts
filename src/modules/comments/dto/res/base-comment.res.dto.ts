import { ApiProperty } from '@nestjs/swagger';

export class BaseCommentResDto {
  @ApiProperty({
    format: 'uuid',
    description: 'Id of the comment',
  })
  id: string;

  @ApiProperty({
    example: 'text text',
    description: 'This is your comment here',
  })
  body: string;

  @ApiProperty({
    example: '3eb02eca-1459-4197-b889-7959faeeb141',
    description: 'Id of the article',
  })
  article_id: string;

  @ApiProperty({
    example: '27417d822-4ce1-412e-a6d1-938f7305c105',
    description: 'Id of the user',
  })
  user_id: string;

  created: Date;

  updated: Date;
}
