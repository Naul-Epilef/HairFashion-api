import { getRepository } from "typeorm";

import User from "../../models/user";

export default class ListUsers {
  public async exec(): Promise<User[]> {
    const userRepository = getRepository(User);

    const listUsers = await userRepository.find({
      order: { created_at: "ASC" },
    });

    return listUsers;
  }
}
