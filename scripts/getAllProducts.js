// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "eshopper",
});

// simple query
connection.query("SELECT * FROM `Products`", function (err, results) {
  console.log(results);
});
