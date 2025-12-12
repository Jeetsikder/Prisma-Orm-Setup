import express, { Request, Response } from "express";
import { prisma } from "./lib/prisma";
const http = require("http");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());

// * --------------- Server ------------
const server = http.createServer(app);

prisma
  .$connect()
  .then(() => {
    console.log("Connected to the database successfully.");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript Express Prisma!");
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
