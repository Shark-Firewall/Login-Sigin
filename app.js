const express = require("express");
const connectDB = require("./db/connect");
const authRouter = require("./routes/auth");
const cookieParser = require("cookie-parser");
const app = express();

//config dotenv file
require("dotenv").config();

//config cookieParser middleware
app.use(cookieParser());

//input-output are in json
app.use(express.json());

//router connection
app.use("/auth", authRouter);

const start = async () => {
  try {
    await connectDB(process.env.db_link);
    app.listen(process.env.PORT, () => {
      console.log(`Server started at ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
