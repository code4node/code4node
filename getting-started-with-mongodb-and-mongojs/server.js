var http = require("http");
var mongo = require("mongojs");

var db = mongo.connect("shop", ["products"]);

http.createServer(function(req, res) {

  db.products.find(function(err, products) {
    if(err) { throw err; }

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<table>");

    products.forEach(function(product) {
      res.write("<tr>");
      res.write("<td>" + product.make + "</td>");
      res.write("<td>" + product.model + "</td>");
      res.write("</tr>");
    });

    res.end("</table>");
  });

}).listen(8080);
