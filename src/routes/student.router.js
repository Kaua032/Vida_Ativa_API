import { Router } from "express";
import {
  allStudentsController,
  registerStudentController,
} from "../controllers/student.controller.js";

const studentRouter = Router();

studentRouter.post("/register", registerStudentController);
studentRouter.get("/all", allStudentsController);

export default studentRouter;
