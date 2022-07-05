import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserUpdate } from "../interfaces/users";

const updateUserService = async (
  { name, email, age }: IUserUpdate,
  userId: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  await userRepository
    .createQueryBuilder()
    .update(User)
    .set({
      name: name,
      email: email,
      age: age,
    })
    .where("id = :id", { id: userId })
    .execute();

  const updatedUser = userRepository.findBy({ id: userId });

  return updatedUser;
};

export default updateUserService;
