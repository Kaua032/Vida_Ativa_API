import Router from "express";
import { findAllFrequencesByDateController } from "../controllers/frequence.controller.js";

const frequenceRouter = Router();

frequenceRouter.get("/consult", findAllFrequencesByDateController);

export default frequenceRouter;
