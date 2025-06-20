import express from "express";
import cors from "cors";
import errorMiddleware from "./src/middlewares/error.middleware.js";
import notFoundMiddleware from "./src/middlewares/notfound.middleware.js";
import authRouter from "./src/routes/auth.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware);

app.use(errorMiddleware);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server run on PORT: ${PORT}`));
