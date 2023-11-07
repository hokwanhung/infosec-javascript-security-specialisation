'use strict';

// Provide certain APIs to access file system, network access, etc.
// Different from browser, and it is a server-side runtime environment.
const fs = require('fs');
const http = require('http');
const crypto = require('crypto');

fs.readFile(__filename, (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data.toString());
    }
}); // most of the nodejs modules are asynchronous.

fs.readdir(__dirname, (err, data) => {
    console.log("dir1 done");
}); // execute in a single thread, one by one.

for (let i = 0; i < 10000; i++) {
    console.log(i);
} // synchronous code prevent asynchronous code from running.

console.log('Hellow World from Node.js!');


http.createServer((req, res) => {
    res.end("ok\n");
}).listen(8080); // set up server and respond with 'ok' whenever a request is received.

process.nextTick(() => {
    http.get('http://localhost:8080', (res) => {
        res.on('data', (data) => {
            console.log(data.toString());
        })
    })
})

console.log(crypto.randomInt(100)); // safe.
console.log(Math.random()); // not safe in crypto perspective.

// nodejs are extremely powerful tool to bind a lot of things to a JavaScript engine.