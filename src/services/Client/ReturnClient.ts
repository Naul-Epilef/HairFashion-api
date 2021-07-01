import Client from "../../models/client";
import ClientRepository from "../../repositories/Client";

interface byId {
  id: string;
}

interface byUser {
  user: string;
}

export default class ReturnClient {
  public async byId({ id }: byId): Promise<Client> {
    const clientRepository = new ClientRepository().exec();

    const client = (await clientRepository.findOne({
      where: { id },
    })) as Client;

    return client;
  }

  public async byUser({ user }: byUser): Promise<Client> {
    const clientRepository = new ClientRepository().exec();

    const client = (await clientRepository.findOne({
      where: { user },
    })) as Client;

    return client;
  }
}
