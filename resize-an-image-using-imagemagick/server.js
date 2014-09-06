var http = require("http");
var im = require("imagemagick"); 

var server = http.createServer(function(req, res) {

  var options = {
    width: 120,
    height: 80,
    srcPath: "image.png",
    dstPath: "output.png"
  };

  im.resize(options, function(err) {
    if(err) { throw err; }
    res.end("Image resize complete");
  });

}).listen(8080);
