import { IUserRequest } from "../interfaces/users";
import { v4 as uuidv4 } from "uuid";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { hash } from "bcryptjs";

const createUserService = async ({
  age,
  name,
  email,
  password,
}: IUserRequest): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      email: email,
    },
  });

  if (findUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hash(password, 10);

  const user = userRepository.create({
    name,
    email,
    password: hashedPassword,
    age,
  });

  await userRepository.save(user);

  return { ...user, password: undefined };
};

export default createUserService;
