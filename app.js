import express from "express";

import "dotenv/config";

import connectDatabase from "./src/database/db.js";
import router from "./src/routes/index.js";

const app = express();
connectDatabase();

const port = process.env.PORT || 2000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`🟢 Server On ${port}`);
});
