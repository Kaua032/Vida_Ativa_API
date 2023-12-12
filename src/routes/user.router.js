import { Router } from "express";
import {
  ChangeUserPasswordController,
  CreateUserController,
  findAllUsersController,
} from "../controllers/user.controller.js";
import {
  authMiddleware,
  checkUserExists,
} from "../middleware/auth.middlware.js";

const userRouter = Router();

userRouter.post("/register", checkUserExists, CreateUserController);
userRouter.put("/changepassword", authMiddleware, ChangeUserPasswordController);
userRouter.get("/all", authMiddleware, findAllUsersController);

export default userRouter;
