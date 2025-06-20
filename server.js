import express from "express";
import cors from "cors";
import errorMiddleware from "./src/middlewares/error.middleware";

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res) => {
  res.status(404).json({ message: `Not Found path: ${req.method} ${req.url}` });
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 8877;

app.listen(PORT, () => console.log(`Server run on PORT: ${PORT}`));
