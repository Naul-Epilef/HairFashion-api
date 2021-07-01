import { v4 } from "uuid";

import Provider from "../../models/provider";
import User from "../../models/user";

import ProviderRepository from "../../repositories/Provider";

interface Request {
  user: User;
}

export default class CreateProvider {
  public async exec({ user }: Request): Promise<Provider> {
    const providerRepository = new ProviderRepository().exec();

    const newProvider = providerRepository.create({
      id: v4(),
      user,
    });

    await providerRepository.save(newProvider);

    return newProvider;
  }
}
