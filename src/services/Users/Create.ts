import { getRepository } from "typeorm";
import { v4 } from "uuid";

import User from "../../models/user";

interface Request {
  name: string;
  email: string;
  pass: string;
  level?: string;
}

export default class CreateUser {
  public async exec({ name, email, pass, level }: Request): Promise<User> {
    const userReposiroty = getRepository(User);

    const newUser = userReposiroty.create({
      id: v4(),
      name,
      email,
      pass,
      level,
    });

    userReposiroty.save(newUser);

    return newUser;
  }
}
