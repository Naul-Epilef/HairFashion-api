import { getRepository } from "typeorm";

import User from "../../models/user";

interface Request {
  id: string;
}

export default class GetUser {
  public async exec({ id }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = (await userRepository.findOne(id)) as User;

    return user;
  }
}
