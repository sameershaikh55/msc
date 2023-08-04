const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
import errorMiddleware from "./middleware/error";
// const errorMiddleware = require("./middleware/error");

// Importing environment variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: path.resolve(__dirname, "config", "config.env"),
  });
}

const app = express();

// APP USE
app.use(
  "/public/images",
  express.static(path.resolve(__dirname, "../public/images"))
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// ROUTE IMPORT
const auth = require("./routes/auth");
const profile = require("./routes/profile");
const game = require("./routes/games");
const settings = require("./routes/settings");

// CONTROLLERS
app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/game", game);
app.use("/api/settings", settings);

// Middleware for Errors
app.use(errorMiddleware);

export default app;
