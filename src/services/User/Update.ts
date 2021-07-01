import ApiError from "../../models/ApiError";
import returnSuccess from "../../interfaces/returnSuccess";
import UserRepository from "../../repositories/User";

interface Request {
  id: string;
  name: string;
  email: string;
  pass: string;
  level: string;
}

export default class UpdateUser {
  public async exec({
    id,
    name,
    email,
    pass,
    level,
  }: Request): Promise<returnSuccess> {
    const userRepository = new UserRepository().exec();

    const user = await userRepository.update(id, { name, email, pass, level });

    if (!user) {
      throw new ApiError({
        status: 400,
        message: `Não foi possível alterar o usuário ${name}`,
      });
    }

    return { status: 200, message: "O usuário foi alterado com sucesso" };
  }
}
