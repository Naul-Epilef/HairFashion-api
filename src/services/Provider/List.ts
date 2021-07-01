import User from "../../models/user";

import UserRepository from "../../repositories/User";

export default class ListProviders {
  public async exec(): Promise<User[]> {
    const userRepository = new UserRepository().exec();

    const users = await userRepository
      .createQueryBuilder()
      .select()
      .where("users.deleted = false AND users.level = 'Esteticista'")
      .leftJoin("providers", "provider", "provider.userId = users.id")
      .getMany();

    return users;
  }
}
