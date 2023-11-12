// For Google Cloud:
'use strict';
const { distance } = require('fastest-levenshtein');

// GET /?word1=hello&word2=bar
module.exports.distance = function (req, res) {

    const word1 = req.query.word1;
    const word2 = req.query.word2;
    // Do not log input objects which might contains cookies,shared secrets, web tokens or even IP addresses.
    console.log('args', { word1, word2 });

    if (typeof word1 !== 'string' || typeof word2 !== 'string') {
        res.status(400);
        // if we do not want to disclose the arguments directly,
        // we could still disclose their values.
        console.log('Error args:');
        console.log('typeof word1', typeof word1);
        console.log('typeof word2', typeof word2);
        // check if the users have pushed wrong clarities to the function,
        console.log('query keys', Object.keys(req.query));
        return res.end('Arguments must be strings');
    }
    res.end(`${distance(word1, word2)}`);
}; // another thing to check is the number of invocations (which also impacts the billing of course).

// Use an APM to tell what on the server is being slow, and if it knows about the cloud infrastructure, 
// it could tell what is slow in the code, and why.
// Also remember to check the 'Billing' tab in Google Cloud or the equivalent of AWS Lambda.

// Create a budget is a great way to limit the costs, and to receive warnings as well (though not the majority of security measures). 