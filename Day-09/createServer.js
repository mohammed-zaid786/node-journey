const http = require("node:http");   //import nily-in module in node.js

const server = http.createServer((req, res) => {          //create new server if any req has come and callback functions will run. [req-client sent info & res-object which through response to client]
  res.end("Hello!");                 //it will sent hello in response body to client
});

server.listen(4000);               //listen to server in 4000 port