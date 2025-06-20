import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  console.log(err);
  res
    .status(err.statusCode || 500)
    .json({ message: err.message } || "internal server error");
});

const PORT = process.env.PORT || 8877;

app.listen(PORT, () => console.log(`Server run on PORT: ${PORT}`));
