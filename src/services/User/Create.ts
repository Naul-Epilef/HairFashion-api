import { v4 } from "uuid";

import User from "../../models/user";
import UserRepository from "../../repositories/User";

interface Request {
  name: string;
  email: string;
  pass: string;
  level: string;
}

export default class CreateUser {
  public async exec({ name, email, pass, level }: Request): Promise<User> {
    const userRepository = new UserRepository().exec();

    const newUser = userRepository.create({
      id: v4(),
      name,
      email,
      pass,
      level,
    });

    await userRepository.save(newUser);

    return newUser;
  }
}
