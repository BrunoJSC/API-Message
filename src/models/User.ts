import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

import { v4 as uuid } from 'uuid';

@Entity("users")
class User {

  // Primary Key to identify ID
  @PrimaryColumn() 
  readonly id: string;
  
  @Column()
  name: string;
  
  @Column()
  email: string;

  // Date of today
  
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { User }