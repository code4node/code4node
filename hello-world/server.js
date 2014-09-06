var http = require("http");

http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  var html = "<!DOCTYPE html>"
           + "<html><head>"
           + "  <meta charset='utf-8'>"
           + "  <title>Hello World</title>"
           + "</head><body>"
           + "  <h1>Hello World</h1>"
           + "  <p>Simple node.js application</p>"
           + "</body></html>";
  res.end(html);
}).listen(8080);

console.log("Server listening on port 8080");
