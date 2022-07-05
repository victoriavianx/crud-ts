import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const verifyUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;

  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: userId });

  if (!findUser) {
    return res.status(404).json({
      message: "Usuário não encontrado",
    });
  }

  next();
};

export default verifyUserExists;
