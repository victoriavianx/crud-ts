import { Request, Response } from "express";
import deleteUserService from "../services/deleteUser.service";

const deleteUser = (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const deletedUser = deleteUserService(userId);

    return res.status(204).json({
      message: "User deleted",
      deletedUser,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default deleteUser;
