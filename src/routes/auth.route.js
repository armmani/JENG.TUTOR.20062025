import express from "express";
import authController from "../controllers/auth.controller.js";
import authenticate from "../middlewares/authenticate.middleware.js";

const authRouter = express.Router()

authRouter.post('/register', authController.register)
authRouter.post('/login', authController.login)
authRouter.get('/me',authenticate, authController.getMe)



export default authRouter