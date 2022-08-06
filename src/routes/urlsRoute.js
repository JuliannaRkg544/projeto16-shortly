import { Router } from "express";
import { postUrl, getUrls,redirectByUrl, deleteUrl, getUrlByUsers } from "../controllers/urlsController.js";
import {tokenValidation} from "../middlewares/tokenValidation.js";

const urlsRouter = Router()

urlsRouter.post("/urls/shorten", tokenValidation, postUrl)
urlsRouter.get("/urls/:id" ,getUrls)
urlsRouter.get("/urls/open/:shortUrl", redirectByUrl)
urlsRouter.delete("/urls/:id", tokenValidation ,deleteUrl)
urlsRouter.get("/users/me", tokenValidation, getUrlByUsers)

export default urlsRouter