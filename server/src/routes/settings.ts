import express from "express";
const router = express.Router();

// MIDDLEWARE
import { authentication } from "../middleware/authentication";

// CONTROLLERS
const { getSettingsData, updateSettings } = require("../controller/settings");

// // ROUTES
router
  .route("/")
  .get(authentication, getSettingsData)
  .patch(authentication, updateSettings);

module.exports = router;
