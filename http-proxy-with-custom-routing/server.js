var httpProxy = require("http-proxy");
var url = require("url");

httpProxy.createServer(function(req, res, proxy) {

  var hostname = req.headers.host.split(":")[0];
  var pathname = url.parse(req.url).pathname;

  // Options for the outgoing proxy request.
  var options = { host: hostname };

  // Routing logic
  if(hostname == "127.0.0.1") {
    options.port = 8083;
  } else if(pathname == "/upload") {
    options.port = 8082;
    options.path = "/"; 
  } else {
    options.port = 8081;
  }
  // (add more conditional blocks here)

  proxy.proxyRequest(req, res, options);

}).listen(8080);

console.log("Proxy listening on port 8080");
