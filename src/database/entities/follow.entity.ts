import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { TableNameEnum } from './enums/table-name.enum';
import { CreateUpdateModel } from './models/create-update.model';
import { UserEntity } from './user.entity';

@Entity(TableNameEnum.FOLLOWS)
export class FollowEntity extends CreateUpdateModel {
  @Column()
  follower_id: string;
  @ManyToOne(() => UserEntity, (entity) => entity.follower)
  @JoinColumn({ name: 'follower_id' })
  follower?: UserEntity;

  @Column()
  following_id: string;
  @ManyToOne(() => UserEntity, (entity) => entity.following)
  @JoinColumn({ name: 'following_id' })
  following?: UserEntity;
}
