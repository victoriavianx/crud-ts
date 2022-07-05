import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserUpdate } from "../interfaces/users";

const updateUserService = async (
  { name, email, age }: IUserUpdate,
  userId: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: userId });

  console.log(findUser);

  if (!findUser) {
    throw new Error("Usuário não encontrado");
  }

  await userRepository.save({
    ...findUser,
    name,
    email,
    age,
  });

  const res = {
    name,
    email,
    age,
  };

  return res;
};

export default updateUserService;
