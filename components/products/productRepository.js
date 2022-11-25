const { connection } = require("../../database");
exports.getAll = (callback) => {
  connection.query("SELECT * FROM `Products`", callback);
};
