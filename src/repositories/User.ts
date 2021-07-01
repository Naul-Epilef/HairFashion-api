import { getRepository, Repository } from "typeorm";

import User from "../models/user";

export default class UserRepository {
  public exec(): Repository<User> {
    return getRepository(User);
  }
}
