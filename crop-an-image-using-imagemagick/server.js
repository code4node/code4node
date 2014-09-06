var http = require("http");
var im = require("imagemagick"); 

var args = [
  "image.png",
  "-crop",
  "120x80+30+15",
  "output.png"
];

var server = http.createServer(function(req, res) {

  im.convert(args, function(err) {
    if(err) { throw err; }
    res.end("Image crop complete");
  });

}).listen(8080);
