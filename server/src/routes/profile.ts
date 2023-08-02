import express from "express";
const router = express.Router();

// MIDDLEWARE
import { authentication } from "../middleware/authentication";

// CONTROLLERS
const { getUserData, updateProfile } = require("../controller/profile");

// // ROUTES
router.route("/user-data").get(authentication, getUserData);
router.route("/update/:id").patch(updateProfile);

module.exports = router;
