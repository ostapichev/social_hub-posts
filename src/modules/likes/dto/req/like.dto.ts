import { IsUUID } from 'class-validator';

export class LikeDto {
  @IsUUID()
  public readonly article_id: any;
}
