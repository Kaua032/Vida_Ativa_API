import { Router } from "express";
import { CreateUserController } from "../controllers/user.controller.js";
import upload from "../config/multer.js";
import { checkUserExists } from "../middleware/auth.middlware.js";

const userRouter = Router();

userRouter.post(
  "/",
  checkUserExists,
  upload.single("file"),
  CreateUserController
);

export default userRouter;
