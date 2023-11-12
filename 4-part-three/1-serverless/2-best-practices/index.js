'use strict';
const { distance } = require('fastest-levenshtein');

// GET /?word1=hello&word2=bar
module.exports.distance = function (req, res) {
    // TODO: Deploy a cloud function on Google Cloud.
    const word1 = req.query.word1;
    const word2 = req.query.word2;

    if (typeof word1 !== 'string' || typeof word2 !== 'string') { 
        res.status(400);
        return res.end('Arguments must be strings'); // must return something - defensive programming.
    } // use validators or even package like joi to check the validity.
    res.end(`${distance(word1, word2)}`);
}; // check npm commands with arguments if dynamic arguments for scripts are needed.

// This is put in the Google Functions to demonstrate how it works.
// The 'Variables' tab allow inspections of runtime and build environment variables (use Edit or CLIA items to actually deploy it).
// However, the environment variables should never be shared in a server, use a secret store if you can.

// 