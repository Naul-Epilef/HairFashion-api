import { v4 } from "uuid";

import Client from "../../models/client";
import User from "../../models/user";
import ClientRepository from "../../repositories/Client";

interface Request {
  user: User;
}

export default class CreateClient {
  public async exec({ user }: Request): Promise<Client> {
    const clientRepository = new ClientRepository().exec();

    const newClient = clientRepository.create({
      id: v4(),
      user,
    });

    await clientRepository.save(newClient);

    return newClient;
  }
}
