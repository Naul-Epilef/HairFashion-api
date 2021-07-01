import Provider from "../../models/provider";
import ProviderRepository from "../../repositories/Provider";

interface byId {
  id: string;
}

interface byUser {
  user: string;
}

export default class ReturnProvider {
  public async byId({ id }: byId): Promise<Provider> {
    const providerRepository = new ProviderRepository().exec();

    const provider = (await providerRepository.findOne(id)) as Provider;

    return provider;
  }

  public async byUser({ user }: byUser): Promise<Provider> {
    const providerRepository = new ProviderRepository().exec();

    const provider = (await providerRepository.findOne({
      where: { user },
    })) as Provider;

    return provider;
  }
}
