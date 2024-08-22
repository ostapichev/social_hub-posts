import { Transform } from 'class-transformer';
import { IsOptional, IsString, Length } from 'class-validator';

import { TransformHelper } from '../../../../common/helpers/transform.helper';

export class CreatePostDto {
  @Transform(TransformHelper.trim)
  @IsString()
  @Length(2, 50)
  public readonly title: string;

  @Transform(TransformHelper.trim)
  @IsString()
  @Length(2, 100)
  public readonly description: string;

  @IsString()
  @Transform(TransformHelper.trim)
  @Length(2, 400)
  public readonly body: string;

  @Transform(TransformHelper.toLowerCase)
  @Transform(TransformHelper.trim)
  @IsString()
  @Length(2, 10)
  @IsOptional()
  public readonly tags?: string;

  @Transform(TransformHelper.trim)
  @IsString()
  @Length(2, 50)
  public readonly user_id: string;
}
