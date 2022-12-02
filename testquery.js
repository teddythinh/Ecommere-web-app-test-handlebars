const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'abcd',
  });

  connection.execute( // SQL injection
    'SELECT * FROM `user`',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available
    }
  );

  exports.connection = connection;