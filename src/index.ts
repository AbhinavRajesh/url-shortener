import express from "express";
import cors from "cors";

// import pool from "./db";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const newUrl = await pool.query("INSERT INTO urls (url) VALUES($1) RETURNING *", [req.body.url])

app.get("/", (_req, res) => {
  res.send({
    message: "Working",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
