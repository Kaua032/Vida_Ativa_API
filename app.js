import express from "express";

import "dotenv/config";

import connectDatabase from "./src/database/db.js";

const app = express();
connectDatabase();

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`🟢 Server On ${port}`);
});
