var express = require("express");
var app = express();

app.get("*", function(req, res) {
  var html = "<!DOCTYPE html>"
           + "<html><head>"
           + "  <meta charset='utf-8'>"
           + "  <title>Hello World</title>"
           + "</head><body>"
           + "  <h1>Hello World</h1>"
           + "  <p>Simple node.js + Express application</p>"
           + "</body></html>";
  res.send(html);
});

app.listen(8080);

console.log("Server listening on port 8080");
