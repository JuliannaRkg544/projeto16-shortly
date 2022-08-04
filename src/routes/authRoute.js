import {Router} from "express";
import { signin, signup } from "../controllers/authController.js";
import { signupMiddleware, signinMiddleware } from "../middlewares/authMiddleware.js";


const authRouter = Router()

authRouter.post("/signup", signupMiddleware ,signup)
authRouter.post("/signin", signinMiddleware ,signin)

export default authRouter;