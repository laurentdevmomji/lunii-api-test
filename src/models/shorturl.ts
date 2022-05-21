import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';


@Entity()
export class ShortUrl {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  originalUrl!: string; // NB: 2048 max length

  @Column({
    unique: true,
    nullable: true,
  })
  shortUrl!: string; 

  @Column({
    default: 0
  })
  nbClicks!: number; 
  
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
