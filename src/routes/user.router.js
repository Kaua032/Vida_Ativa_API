import { Router } from "express";
import {
  ChangeUserPasswordController,
  CreateUserController,
  findAllUsersController,
} from "../controllers/user.controller.js";
import upload from "../config/multer.js";
import {
  authMiddleware,
  checkUserExists,
} from "../middleware/auth.middlware.js";

const userRouter = Router();

userRouter.post(
  "/register",
  checkUserExists,
  upload.single("file"),
  CreateUserController
);
userRouter.put("/changepassword", authMiddleware, ChangeUserPasswordController);
userRouter.get("/all", findAllUsersController);

export default userRouter;
