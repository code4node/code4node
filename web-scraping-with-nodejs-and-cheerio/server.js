var http = require("http");
var cheerio = require("cheerio");

var server = http.createServer(function(req, res) {

  var req_opts = {
    host:"en.wikipedia.org",
    path:"/wiki/London"
  };
  var response_text = "";

  // 1. Perform an HTTP request to Wikipedia
  var request = http.request(req_opts, function(resp) {
    if(resp.statusCode != 200) {
      throw "Error: " + resp.statusCode; 
    };
    resp.setEncoding("utf8");
    resp.on("data", function (chunk) {
      response_text += chunk;
    });
    resp.on("end", function() {

      // 2. Parse response using cheerio
      $ = cheerio.load(response_text);

      // Begin writing our output HTML
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<html><head><meta charset='UTF-8' />");
      res.write("</head><body><table>");

      // Iterate over TR elements in the Wikipedia infobox
      $("table.geography tr").each(function(tr_index, tr) {
        var th_text = $(this).find("th").text();
        var prop_name
          = th_text.trim().toLowerCase().replace(/[^a-z]/g,"");

        // We're only interested in these 3 fields
        if({"country":1,"mayor":1,"elevation":1}[prop_name])
        {
          // 3. Write out our tabulated data
          res.write("<tr><th>" + prop_name + "</th><td>");
          res.write($(this).find("td").text());
          res.write("</td></tr>");
        }
      });

      // And... we're done
      res.end("</table></body></html>");
    });
  });

  request.on("error", function(e) {
    throw "Error: " + e.message;
  });

  request.end();

}).listen(8080);
