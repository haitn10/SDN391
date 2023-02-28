const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const nationsRouter = require("./routes/nations");
const adminRouter = require("./routes/admins");
const playerRouter = require("./routes/players");
const { login } = require("./controllers/auth/login");

const app = express();
dotenv.config();

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI);
  } catch (e) {
    throw e;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});

//middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//router
app.use("/login", login);
app.use("/admins", adminRouter);
app.use("/players", playerRouter);
app.use("/nations", nationsRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Internal Server Error!";
  return res.status(errorStatus).json({
    errorStatus: errorStatus,
    errorMessage: errorMessage,
  });
});

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  connect();
  console.log(`Server running on port ${app.get("port")}!`);
});
