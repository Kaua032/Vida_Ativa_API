import { Router } from "express";
import {
  ChangeUserPasswordController,
  CreateUserController,
  findAllUsersController,
} from "../controllers/user.controller.js";
import {
  authMiddleware,
  checkUserExists,
  verifyIfCanAddTeacher,
} from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.post(
  "/register",
  authMiddleware,
  verifyIfCanAddTeacher,
  checkUserExists,
  CreateUserController
);
userRouter.put("/changepassword", authMiddleware, ChangeUserPasswordController);
userRouter.get("/all", authMiddleware, findAllUsersController);

export default userRouter;
