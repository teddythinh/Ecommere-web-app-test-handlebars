const express = require("express");
const router = express.Router();

const userController = require("./userController");

router.get("/", userController.list);
router.get("/:userId", userController.details);

module.exports = router;
