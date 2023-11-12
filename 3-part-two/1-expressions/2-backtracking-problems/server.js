// Regular Expression Denial of Services (Redos):
// Comparing regex is always a synchronous task, which takes place in the current thread and blocks other executions.

// The server could be blocked as JavaScript is by default single threaded, 
// though it has a lot of asynchronous APIs to help it executes.
'use strict';
const Express = require('express');
const BodyParser = require('body-parser');

const getLastWord = function (str) {
    // why is this regex so slow?
    // this is a regex with catastrophic backtracking - which loops and takes an exponential growing time to compute.
    // the double capturing group require the regex to try every possible possibilities of the string.
    // Thus, how to prevent it?
    // 1. There is two modules named ReDos (with readers) and safe-regex (better but no CLI), which detect bad regex expressions.
    // 2. Use the VM class to run an arbitrary script with a timeout value - remove the blocking of synchronous code.
    const re1 = /([a-z0-9]+)+$/;
    const res = str.match(re1);

    // 3. use other stuff than regex to do the same effect.
    const last = str.split(' ').pop();
    const re2 = /[a-z0-9]+/; 
    
    if (res === null) {
        throw new Error('invalid string content');
    }
    return res[0];
}

const app = Express();

app.use(BodyParser.json());

app.get('/check/:text', (req, res, next) => {

    const text = req.params.text;
    if (typeof text !== 'string') {
        return next(new Error('params.text must be a string'));
    }
    try {
        return res.json({ last_word: getLastWord(text) });
    } catch (e) {
        return next(e);
    }
});

app.get('echo/:text', (req, res) => {
    return res.json(req.params);
});

app.listen(8080);
// 'node --inspect' will start the server with dev tools just like what a browser normally does with front-end.
// Check Profiler with failed execution to evaluate how much time the blocking function is using.
// The displayed time would be the compute time of a function itself with those of its child functions.
