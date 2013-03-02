// Load the http module to create an http server.
var http   = require('http'),
    mysql  = require('mysql');

var connection = mysql.createConnection({
      host     : 'instance39930.db.xeround.com',
      port     : '3640',
      user     : '',
      password : ''
    });


// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});

    connection.connect();

    connection.query("SELECT * FROM COMPANY.COMPANY", function(err, rows, fields) {
      if (err) throw err;
      console.log(rows);
    });

    connection.end();
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");


