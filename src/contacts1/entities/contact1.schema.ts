/* eslint-disable prettier/prettier */
import { Column, Entity, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class Contact1 {
  @ObjectIdColumn()
  id: ObjectId;
  
  @Column()
  name: string;

  @Column()
  phone: number;

  @Column({ default: false })
  isDeleted: boolean;
}
