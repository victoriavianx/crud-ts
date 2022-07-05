import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const listUserService = async (userId: string): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findBy({ id: userId });

  return user;

  //   const user = await userRepository
  //     .createQueryBuilder("user")
  //     .where("user.id = :id", { id: userId })
  //     .getOne();

  //   return user;
};

export default listUserService;
