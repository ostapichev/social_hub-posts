import { ApiProperty } from '@nestjs/swagger';

export class BaseFollowerResDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty({ example: '34343jskwe-4344-34tr43-ere454' })
  follower_id: string;

  @ApiProperty({ example: '232mdds23-rere43343-ewew-233' })
  following_id: string;

  createdAt: Date;

  updatedAt: Date;
}
