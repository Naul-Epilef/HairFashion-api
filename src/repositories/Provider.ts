import { getRepository, Repository } from "typeorm";

import Provider from "../models/provider";

export default class ProviderRepository {
  public exec(): Repository<Provider> {
    return getRepository(Provider);
  }
}
