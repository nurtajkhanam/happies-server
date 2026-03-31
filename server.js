import express from "express";
import { db } from "./db/db.js";

const app = express();
const port = 5000;

try {
  await db.authenticate();
} catch (error) {
  // TODO add better error handling
  console.log("Something went wrong");
  process.exit(1);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Our HAPPIES is listening on port ${port}`);
});
