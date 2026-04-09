import express from "express";
import { db } from "./db/db.js";
import postRouter from "./routes/post.routes.js";

const app = express();
const port = 8000;

app.use(express.json());

try {
  await db.authenticate();
} catch (error) {
  // TODO add better error handling
  console.log("Something went wrong");
  process.exit(1);
}

app.use(postRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use((err, req, res, next) => {
  return res.status(500).json({ message: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Our HAPPIES is listening on port ${port}`);
});

// MVC
/*
  MODEL - represents data model, e.g. post.model.js
  VIEW - represents view/ui
  CONTROLLER - represents the business logic, e.g. creating post code
*/
