"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("./lib/prisma");
prisma_1.prisma
    .$connect()
    .then(() => {
    console.log("Connected to the database successfully.");
})
    .catch((error) => {
    console.error("Error connecting to the database:", error);
});
