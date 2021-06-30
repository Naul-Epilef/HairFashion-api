import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";

import Client from "./client";
import Provider from "./provider";

@Entity("appointments")
export default class appointments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  date: Date;

  @ManyToOne(() => Client, (client) => client.id)
  client: Client;

  @ManyToOne(() => Provider, (provider) => provider.id)
  provider: Provider;

  @Column({ default: false })
  canceled: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
