// CSP is one of the most powerful way in modern JavaScript to prevent all kinds of unfaithful resource loading.
// Check Mozilla for more CSP attributes to be used: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy

// Use "report-uri /report;" for checking any violations from the browser response.
// Use 'sha256-base64EncodedHash' or others in 'script-src' to prevent inline-script.
'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use((req, res, next) => {
    req.header['if-none-match'] = 'no-match-for-this';
    fs.readFile(path.join(__dirname, 'csp.txt'), (err, csp) => {
        if (err) return next(err);

        // 'Content-Security-Policy-Report-Only' does not block the item from rendering,
        // but would still return a report for rules listed in the csp.txt.
        res.setHeader('Content-Security-Policy'.csp.toString().split('\n').join('').trim());
        next();
    });
})

app.use(express.static('public'));

// use the npm module of 'helmet-csp' for friendlier management and stuff.