const userService = require("./userService");

exports.list = (req, res) => {
  const users = userService.getAll();
  res.render("users/list", users);
};

exports.details = (req, res) => {
  const userId = req.params.userId;
  // validate
  // ...

  const user = userService.getByUserId(userId);
  res.render("users/details", user);
};

exports.login = (req, res) => {
  res.render("users/login");
};
