const { users } = require("./userDataSource.json");

exports.list = async () => {
  return await users().collection("users").find().toArray();
};

exports.getByUserId = (userId) => {
  return users.find((user) => user.userId === userId);
};

exports.login = (req, res) => {
  res.render("users/login");
}

