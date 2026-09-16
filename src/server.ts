import cors from "cors";
import "dotenv/config";
import express, { NextFunction } from "express";
import { router } from "./routes";
import { Request, Response} from 'express';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use((error: Error, _: Request, res: Response, __: NextFunction) => {

  if(error instanceof Error){
    return res.status(400).json({
      error: error.message,
    })
  }

  return res.status(500).json({
    error: "Internal server error"
  })
})

const PORT = process.env.PORT! || 3333;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
