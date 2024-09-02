import { Transform, Type } from 'class-transformer';
import { IsString, Length } from 'class-validator';

import { TransformHelper } from '../../../../common/helpers/transform.helper';

export class CommentDto {
  @IsString()
  @Length(2, 200)
  @Transform(TransformHelper.trim)
  @Type(() => String)
  body: string;
}
