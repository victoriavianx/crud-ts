import { users } from "../database";
import { IUser } from "../interfaces/users";

const listUsersService = (): IUser[] => {
  return users;
};

export default listUsersService;
