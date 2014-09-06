var http = require("http");
var uuid = require("node-uuid");

http.createServer(function(req, res) {

  // v1 (time-based)
  res.write("<p>" + uuid.v1() + "</p>");

  // v4 (random)
  res.write("<p>" + uuid.v4() + "</p>");

  res.end();

}).listen(8080);
