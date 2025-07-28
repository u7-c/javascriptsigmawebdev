// Further Reading: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
const http = require('node:http');
const fs = require("fs")
//this require just loads all the fxns of fs
//we need tio create a http server

const hostname = '127.0.0.1';
//local host...this server only listens locally
const port = 3000;
//Ports range from 0–65535. Ports like 80 (HTTP) and 443 (HTTPS) are default,
// but we use 3000 for dev servers (like in React, Express, etc).

const server = http.createServer((req, res) => {
  //request and response
  res.statusCode = 200;
  //200 ok success
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World lol1\n');
  //this means that one cycle is done
});

server.listen(port, hostname, () => {
//   This starts the server and makes it listen for incoming HTTP requests on 127.0.0.1:3000.

// The callback () => { console.log(...) } is fired once the server is successfully running.
  console.log(`Server running at http://${hostname}:${port}/`);
}); 

// what is nvm exactly??
//for example there are two projects which need two different versions of node to run upon
//so it will switch automatically between the versions itself