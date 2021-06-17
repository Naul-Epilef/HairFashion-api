import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import User from "./user";

@Entity("clients")
export default class clients {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => User)
  @JoinColumn()
  users_id: string;
}
