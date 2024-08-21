import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: true })
  avatar: string;

  @Column('text')
  name: string;

  @Column('text', { nullable: true })
  about: string;

  @Column('text', { unique: true })
  email: number;

  @Column('text', { select: false })
  password: string;
}
