import { BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

export class Channel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
