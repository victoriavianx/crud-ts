import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const deleteUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new Error("User not found");
  }

  await userRepository
    .createQueryBuilder()
    .delete()
    .from(User)
    .where("id = :id", { id: userId })
    .execute();
};

export default deleteUserService;
