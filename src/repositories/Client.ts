import { getRepository, Repository } from "typeorm";

import Client from "../models/client";

export default class ClientRepository {
  public exec(): Repository<Client> {
    return getRepository(Client);
  }
}
