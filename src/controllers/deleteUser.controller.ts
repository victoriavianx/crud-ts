import { Request, Response } from "express";
import deleteUserService from "../services/deleteUser.service";

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    await deleteUserService(userId);

    return res.status(200).json({
      message: "Usuário deletado",
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({
        message: error.message,
      });
    }
  }
};

export default deleteUser;
