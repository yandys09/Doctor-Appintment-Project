const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");
const connectDB = require("./config/db");

//rest object
const app = express();

// 
app.use(helmet());

//dotenv config
dotenv.config();

//Logger
app.use(morgan("tiny"));

//mongodb connection
connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));

//port
const port = process.env.PORT || 5000;

//listen port
app.listen(port, () => {
  console.log(
    `${process.env.PORT}안에서 ${process.env.NODE_MODE}로 서버가 동작중입니다.!!`
      .bgMagenta.white
  );
});
