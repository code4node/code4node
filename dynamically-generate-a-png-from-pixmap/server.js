var http = require("http");
var fs = require("fs");
var Buffer = require("buffer").Buffer;
var Png = require("png").Png;

var IMAGE_WIDTH = 255;
var IMAGE_HEIGHT = 255;

var server = http.createServer(function(req, res) {

  var rgb_data = new Buffer(IMAGE_WIDTH * IMAGE_HEIGHT * 3);

  for(var h = 0; h < IMAGE_HEIGHT; h++)
  {
    for(var w = 0; w < IMAGE_WIDTH; w++)
    {
      var p = h * IMAGE_WIDTH * 3 + w * 3;
      rgb_data[p + 0] = h; // r (0-255)
      rgb_data[p + 1] = 0; // g (0-255)
      rgb_data[p + 2] = w; // b (0-255)
    }
  }

  var png = new Png(rgb_data, IMAGE_WIDTH, IMAGE_HEIGHT, "rgb")

  fs.writeFile("output.png", png.encodeSync().toString("binary"),
               "binary", function(err) {
    if(err) { throw err; }
    res.end("PNG image generated");
  });

}).listen(8080);
