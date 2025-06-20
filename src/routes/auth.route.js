import express from "express";

const authRouter = express.Router()

authRouter.post('/register', ()=>{})
authRouter.post('/login', ()=>{})
authRouter.get('/me', ()=>{})



export default authRouter