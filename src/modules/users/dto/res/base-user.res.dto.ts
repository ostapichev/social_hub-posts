import { ApiProperty } from '@nestjs/swagger';

export class BaseUserResDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty({ example: 'John Smith' })
  name: string;

  @ApiProperty({ example: 'test@gmail.com' })
  email: string;

  @ApiProperty({ example: 'P@$$word1' })
  password: string;

  @ApiProperty({ required: false, example: 'Write about me' })
  bio?: string;

  @ApiProperty({ example: 'http://example.com/avatar.png' })
  image?: string;

  createdAt: Date;

  updatedAt: Date;
}
