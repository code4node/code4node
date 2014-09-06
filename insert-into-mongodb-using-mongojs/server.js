var http = require("http");
var mongo = require("mongojs");

var db = mongo.connect("shop", ["products"]);

http.createServer(function(req, res) {

  var data = {
    make: "Nokia",
    model: "Lumia"
  };

  db.products.insert(data, function(err, result) {
    if(err) { throw err; }
    res.write("<p>Product inserted:</p>");
    res.end("<p>" + result[0].make + " " + result[0].model + "</p>");
  });

}).listen(8080);
