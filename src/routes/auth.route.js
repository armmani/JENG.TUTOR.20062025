import express from "express";
import authController from "../controllers/auth.controller.js";
import authenticate from "../middlewares/authenticate.middleware.js";
import validatorMiddleware from "../middlewares/validator.middleware.js";

const authRouter = express.Router()

authRouter.post('/register',validatorMiddleware, authController.register)
authRouter.post('/login', authController.login)
authRouter.get('/me',authenticate, authController.getMe)



export default authRouter