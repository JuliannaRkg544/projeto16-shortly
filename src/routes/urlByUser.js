import { Router } from "express";
import { getUrlByUsers,getTopVisitedUrls } from "../controllers/urlByUserController.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";

const urlsByUserRouter = Router()

urlsByUserRouter.get("/users/me", tokenValidation, getUrlByUsers)
urlsByUserRouter.get("/ranking",getTopVisitedUrls)

export default urlsByUserRouter;