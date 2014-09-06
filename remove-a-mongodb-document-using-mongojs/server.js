var http = require("http");
var mongo = require("mongojs");

var db = mongo.connect("shop", ["products"]);

http.createServer(function(req, res) {

  var query = {
    // WHERE make = 'Samsung'
    make: "Samsung"
  };

  db.products.remove(query, function(err, result) {
    if(err) { throw err; }
    res.end("<p>Product removed");
  });

}).listen(8080);
