import { Request, Response } from "express";
import createUserService from "../services/createUser.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age } = req.body;

    const user = await createUserService({ name, email, password, age });

    return res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default createUser;
