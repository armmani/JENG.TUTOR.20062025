import express from "express";
import authController from "../controllers/auth.controller.js";

const authRouter = express.Router()

authRouter.post('/register', authController.register)
authRouter.post('/login', ()=>{})
authRouter.get('/me', ()=>{})



export default authRouter