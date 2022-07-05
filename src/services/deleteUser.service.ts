import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const deleteUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  await userRepository.delete({ id: userId });
};

export default deleteUserService;
