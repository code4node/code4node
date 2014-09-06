var http = require("http");
var mongo = require("mongojs");

var db = mongo.connect("shop", ["products"]);

http.createServer(function(req, res) {

  var update = {
    // SET model = 'iPad 3' 
    $set: { model: "iPad 3"}
  };

  var query = {
    // WHERE model = 'iPad' 
    model: "iPad"
  };

  db.products.update(query, update, function(err, result) {
    if(err) { throw err; }
    res.end("<p>Product updated</p>");
  });

}).listen(8080);
