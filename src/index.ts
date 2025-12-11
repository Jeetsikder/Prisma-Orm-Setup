import { prisma } from "./lib/prisma";

prisma
  .$connect()
  .then(() => {
    console.log("Connected to the database successfully.");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
