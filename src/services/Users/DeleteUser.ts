import { DeleteResult, getRepository } from "typeorm";

import User from "../../models/user";

interface Request {
  id: string;
}

export default class DeleteUser {
  public async exec({ id }: Request): Promise<DeleteResult> {
    const userRepository = getRepository(User);

    const isDeleted = await userRepository.delete(id);

    return isDeleted;
  }
}
