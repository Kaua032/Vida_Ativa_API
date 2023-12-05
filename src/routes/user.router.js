import { Router } from "express";
import { CreateUserController } from "../controllers/user.controller.js";
import upload from "../config/multer.js";

const userRouter = Router();

userRouter.post("/", upload.single("file"),CreateUserController);

export default userRouter;
