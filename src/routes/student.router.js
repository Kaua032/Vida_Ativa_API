import { Router } from "express";
import { registerStudentController } from "../controllers/student.controller.js";

const studentRouter = Router();

studentRouter.post("/register", registerStudentController);
studentRouter.get("/all");

export default studentRouter;
