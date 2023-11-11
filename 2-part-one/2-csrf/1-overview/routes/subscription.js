'use strict';
const express = require('express');
const router = express.Router();
const STORE = require('./store').STORE;
const TOKENS = require('./index').TOKENS;

router.post('/', (req, res, next) => {
    // validate the token generated and are given to the user to prevent csrf attacks.
    const csrf_token = req.body.csrf_token;
    if (!csrf_token || TOKENS.has(csrf_token)) {
        res.end('well tried');
    } // remember to let the csrf_token to expire after some time, through database or other means - especially with Redux.

    TOKENS.delete(csrf_token);

    STORE.set(req.body.email, req.body.name);
    res.render('subscribe', req.body);
});

router.get('/all', (req, res) => {
    const data = Array.from(STORE.entries()).map(([email, name]) => { email, name });
    res.render('subscriptions', { data });
})

module.exports = router;