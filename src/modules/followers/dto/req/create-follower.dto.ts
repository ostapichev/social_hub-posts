import { Transform } from 'class-transformer';
import { IsString, Length } from 'class-validator';

import { TransformHelper } from '../../../../common/helpers/transform.helper';

export class CreateFollowerDto {
  @Transform(TransformHelper.trim)
  @IsString()
  @Length(2, 100)
  public readonly follower_id?: string;

  @Transform(TransformHelper.trim)
  @IsString()
  @Length(2, 100)
  public readonly following_id?: string;
}
