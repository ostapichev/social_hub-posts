import { ApiProperty } from '@nestjs/swagger';

import { OrderEnum } from '../../enums/order.enum';

export class PostsListReqDto {
  @ApiProperty({
    example: 10,
    description: 'The limit of items per page',
    required: true,
  })
  limit: number;

  @ApiProperty({
    example: 0,
    description: 'The limit of items per page',
    required: true,
  })
  offset: number;

  @ApiProperty({
    example: 'tag',
    description: 'Tag of the posts',
    required: false,
  })
  tag?: string;

  @ApiProperty({
    example: 'asc',
    description: 'The sort order',
    required: false,
  })
  sort: string;

  order?: OrderEnum;

  @ApiProperty({
    example: 'id',
    description: 'The field to order by',
    required: false,
  })
  orderBy: string;
}
