import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("surveys")
class Survey {
  // Primary Key to identify ID
  @PrimaryColumn() 
  readonly id: string;
  
  @Column()
  title: string;
  
  @Column()
  description: string;

  // Date of today
  
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }  
}

export { Survey }