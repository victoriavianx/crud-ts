import { Router } from "express";
import createUser from "../controllers/createUser.controller";
import deleteUser from "../controllers/deleteUser.controller";
import listUser from "../controllers/listUser.controller";
import listUsers from "../controllers/listUsers.controller";
import updateUser from "../controllers/updateUser.controller";

const userRoutes = Router();

userRoutes.post("", createUser);
userRoutes.get("", listUsers);
userRoutes.get("/:id", listUser);
userRoutes.patch("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
