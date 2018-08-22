var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
 connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
  port: 3306,
  host: "127.0.0.1",
  user: "root",
  password: "hpl1940t",
  database: "burgers_db"
});
};

module.exports = connection;