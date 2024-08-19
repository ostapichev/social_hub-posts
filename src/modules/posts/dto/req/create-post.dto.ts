import { IsOptional, IsString, Length } from 'class-validator';
import { Transform } from 'class-transformer';

import { TransformHelper } from '../../../../common/helpers/transform.helper';

export class CreatePostDto {
  @Transform(TransformHelper.trim)
  @IsString()
  @Length(2, 50)
  public readonly title: string;

  @Transform(TransformHelper.trim)
  @IsString()
  @Length(8, 100)
  public readonly about: string;

  @IsString()
  @Transform(TransformHelper.trim)
  @Length(8, 400)
  public readonly body: string;

  @Transform(TransformHelper.toLowerCase)
  @Transform(TransformHelper.trim)
  @IsString()
  @Length(2, 10)
  @IsOptional()
  public readonly tag?: string;
}
