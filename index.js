import express from "express";
import router from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import { StatusCode } from "./utils/errorHandle.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/api", router);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  let message = err.message || "Terjadi kesalahan server.";

  if (statusCode === 500 && !(err instanceof CustomError)) {
    message = "Terjadi kesalahan teknis server.";
  }

  console.error(`[ERROR ${statusCode}]:`, err);

  res.status(statusCode).json({
    statusCode: statusCode,
    message: message,
  });
});

app.listen(port, () => {
  console.log("server running!!");
});
