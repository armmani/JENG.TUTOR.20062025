import express from "express";
import cors from "cors";
import errorMiddleware from "./src/middlewares/error.middleware.js";
import notFoundMiddleware from "./src/middlewares/notfound.middleware.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(notFoundMiddleware);

app.use(errorMiddleware);

const PORT = process.env.PORT || 8877;

app.listen(PORT, () => console.log(`Server run on PORT: ${PORT}`));
