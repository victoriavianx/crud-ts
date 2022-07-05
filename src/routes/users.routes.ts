import { Router } from "express";
import createUser from "../controllers/createUser.controller";
import deleteUser from "../controllers/deleteUser.controller";
import listUser from "../controllers/listUser.controller";
import listUsers from "../controllers/listUsers.controller";
import updateUser from "../controllers/updateUser.controller";
import verifyUserExists from "../middlewares/verifyUserExists.middleware";

const userRoutes = Router();

userRoutes.post("", createUser);
userRoutes.get("", listUsers);
userRoutes.get("/:id", verifyUserExists, listUser);
userRoutes.patch("/:id", verifyUserExists, updateUser);
userRoutes.delete("/:id", verifyUserExists, deleteUser);

export default userRoutes;
