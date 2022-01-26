import "dotenv-safe/config";
import express from "express";
import cors from "cors";
import path from "path";

import urlRouter from "./routes/urls";
import indexRouter from "./routes/index";
// import pool from "./db";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));
// const newUrl = await pool.query("INSERT INTO urls (url) VALUES($1) RETURNING *", [req.body.url])

app.use("/", indexRouter);
app.use("/api/v1/urls", urlRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
