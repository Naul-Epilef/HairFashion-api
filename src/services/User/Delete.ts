import ApiError from "../../models/ApiError";

import UserRepository from "../../repositories/User";

interface Request {
  id: string;
}

export default class DeleteUser {
  public async exec({ id }: Request): Promise<void> {
    const userRepository = new UserRepository().exec();

    const userDeleted = await userRepository.update(id, { deleted: true });

    const affected = userDeleted.affected as number;

    if (affected == 0) {
      await userRepository.update(id, { deleted: false });
      throw new ApiError({
        status: 400,
        message: "Não foi possível excluir o usuário!",
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
