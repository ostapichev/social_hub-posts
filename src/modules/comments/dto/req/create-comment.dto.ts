import { Transform } from 'class-transformer';
import { IsString, Length } from 'class-validator';

import { TransformHelper } from '../../../../common/helpers/transform.helper';

export class CreateCommentDto {
  @Transform(TransformHelper.trim)
  @IsString()
  @Length(2, 100)
  public readonly body: string;
}
