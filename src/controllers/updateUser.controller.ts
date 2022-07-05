import { Response, Request } from "express";
import updateUserService from "../services/updateUser.service";

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { name, email, age } = req.body;
    const updatedUser = await updateUserService({ name, email, age }, userId);

    return res.status(200).json({
      message: "Usuário atualizado",
      updatedUser,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default updateUser;
