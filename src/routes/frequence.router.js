import Router from "express";
import {
  addFrequencesController,
  allFrequencesOnTheMonth,
  findAllFrequencesByDateController,
} from "../controllers/frequence.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const frequenceRouter = Router();

frequenceRouter.get("/consult", findAllFrequencesByDateController);
frequenceRouter.post("/add", authMiddleware, addFrequencesController);
frequenceRouter.get("/allmonth", allFrequencesOnTheMonth);

export default frequenceRouter;
