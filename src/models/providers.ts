import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import User from "./user";

@Entity("providers")
export default class appointments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => User)
  @JoinColumn()
  users_id: string;
}
