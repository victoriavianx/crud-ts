import { Request, Response } from "express";
import listUsersService from "../services/listUsers.service";

const listUsers = async (req: Request, res: Response) => {
  try {
    const users = await listUsersService();

    return res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default listUsers;
