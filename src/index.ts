import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import sequelize from "./config/database";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database: ", err);
  });

app.get("/", (req, res) => {
  res.send("hello , Healthcare IT solution");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
