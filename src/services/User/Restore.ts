import ApiError from "../../models/ApiError";

import UserRepository from "../../repositories/User";

interface Request {
  id: string;
}

export default class RestoreUser {
  public async exec({ id }: Request): Promise<void> {
    const userRepository = new UserRepository().exec();

    const userRestored = await userRepository.update(id, { deleted: false });

    const affected = userRestored.affected as number;

    if (affected == 0) {
      await userRepository.update(id, { deleted: true });
      throw new ApiError({
        status: 400,
        message: "Não foi possível restaurar o usuário!",
      });
    } else if (affected > 1) {
      await userRepository.update(id, { deleted: false });
      throw new ApiError({
        status: 400,
        message:
          "Ocorreu um erro, entre em contato com o suporte para resolver!",
      });
    }
  }
}
