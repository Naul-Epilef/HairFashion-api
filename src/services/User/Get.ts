import ApiError from "../../models/ApiError";
import User from "../../models/user";
import UserRepository from "../../repositories/User";

interface Request {
  id: string;
}

export default class GetUser {
  public async exec({ id }: Request): Promise<User> {
    const userRepository = new UserRepository().exec();

    const user = await userRepository.findOne(id);

    if (!user) {
      throw new ApiError({ status: 404, message: "Usuário não encontrado!" });
    }

    return user;
  }
}
