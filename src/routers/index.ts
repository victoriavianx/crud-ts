import { Router } from "express";
import createUser from "../controllers/createUser.controller";
import listUsers from "../controllers/listUser.controller";

const userRoutes = Router();

userRoutes.post("", createUser);
userRoutes.get("", listUsers);

export default userRoutes;
