import { getRepository } from "typeorm";

import User from "../../models/user";

interface Request {
  id: string;
  name: string;
  email: string;
  pass: string;
  level: string;
}

export default class UpdateUser {
  public async exec({ id, name, email, pass, level }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = (await userRepository.findOne(id)) as User;

    user.name = name;
    user.email = email;
    user.pass = pass;
    user.level = level;

    userRepository.save(user);

    return user;
  }
}
