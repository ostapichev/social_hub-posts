import { Transform } from 'class-transformer';

import {
  IsEmail,
  IsNotIn,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { TransformHelper } from '../../../../common/helpers/transform.helper';

export class CreateUserDto {
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @IsString()
  @Length(4, 50)
  @IsOptional()
  public readonly avatar?: string;

  @Transform(TransformHelper.trim)
  @IsString()
  @Length(2, 20)
  public readonly name: string;

  @Transform(TransformHelper.trim)
  @IsString()
  @Length(2, 20)
  @IsOptional()
  public readonly about?: string;

  @IsString()
  @IsEmail()
  public readonly email: string;

  @Transform(TransformHelper.trim)
  @IsNotIn(['password', 'qwe', '123'])
  @IsString()
  @Matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])\S{8,20}$/, {
    message: 'The password must be from 8 to 20 characters consisting ' +
             'of small and large letters, numbers and special characters.',
  })
  public readonly password: string;
}
