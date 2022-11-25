var express = require("express");
var router = express.Router();

router.get("/", function (res, req, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
