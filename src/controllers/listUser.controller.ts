import { Request, Response } from "express";
import listUserService from "../services/listUser.service";

const listUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await listUserService(userId);

    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default listUser;
