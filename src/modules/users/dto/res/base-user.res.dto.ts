import { ApiProperty } from '@nestjs/swagger';

export class BaseUserResDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  avatar?: string;

  @ApiProperty({ example: 'John Smith'})
  name: string;

  @ApiProperty({ required: false, example: 'Write about me' })
  about?: string;

  @ApiProperty({ example: 'test@gmail.com' })
  email: string;

  @ApiProperty({ example: 'P@$$word1' })
  password: string;

  createdAt: Date;
  updatedAt: Date;
}
