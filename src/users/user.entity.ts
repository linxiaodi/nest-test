import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // 1 root
  // 2 master
  // 3 dev 运营
  // 4 guest
  @Column({ default: 2 })
  role: number;
}
