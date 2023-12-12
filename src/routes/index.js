import { Router } from "express";
import authRouter from "./auth.router.js";
import userRouter from "./user.router.js";
import studentRouter from "./student.router.js";

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/student", studentRouter);

export default router;
