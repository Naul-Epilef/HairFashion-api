import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import Client from "./clients";
import Provider from "./providers";

@Entity("appointments")
export default class appointments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  date: Date;

  @ManyToOne(() => Client, (client) => client.id)
  users_id: string;

  @ManyToOne(() => Provider, (provider) => provider.id)
  providers_id: string;

  @Column()
  canceled_at: Date;

  @CreateDateColumn()
  created_at: Date;
}
