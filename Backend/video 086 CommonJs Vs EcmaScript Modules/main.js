
// commonJs-- when we import the module simply using require 
// it loads  synchronously  --> type=="commonJs"
// const http = require('node:http');

// ES6 Module-->  type=="module"
// import http from "http";

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// using ES6

// way to import named export
// import {a, b} from "./mymodule.js";
// console.log(a);
// console.log(b);

// // way to import default export --> in this we can use any name while importing
// import vipin from "./mymodule.js"
// console.log(vipin);


//using commonJs

const x = require("./mymodule2.js");
console.log(x);
