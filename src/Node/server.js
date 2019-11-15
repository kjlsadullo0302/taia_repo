var http = require("http");
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "admin",
    database: "taia_db"
  });

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
 }).listen(8000);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8000/');

con.connect(function(err) {
    console.log('test');
  if (err) throw err;
  console.log("Connected!");

});

