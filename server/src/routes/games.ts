import express from "express";
const router = express.Router();

// MIDDLEWARE
import { authentication } from "../middleware/authentication";

// CONTROLLERS
const { getGameData, updateGame } = require("../controller/games");

// // ROUTES
router
  .route("/")
  .get(authentication, getGameData)
  .patch(authentication, updateGame);

module.exports = router;
