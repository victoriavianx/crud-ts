import { users } from "../database";
import { IUser, IUserRequest } from "../interfaces/users";
import { v4 as uuidv4 } from "uuid";

const createUserService = ({
  age,
  name,
  email,
  password,
}: IUserRequest): IUser => {
  const newUser: IUser = {
    id: uuidv4(),
    name,
    email,
    password,
    age,
    created_at: new Date(),
    updated_at: new Date(),
  };

  users.push(newUser);
  return newUser;
};

export default createUserService;
