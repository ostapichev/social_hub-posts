import { Transform } from 'class-transformer';
import { IsString, Length } from 'class-validator';

import { TransformHelper } from '../../../../common/helpers/transform.helper';

export class CreateTagDto {
  @Transform(TransformHelper.trim)
  @IsString()
  @Length(2, 100)
  public readonly name: string;

  @IsString()
  @Length(2, 100)
  public readonly articles?: string;
}
