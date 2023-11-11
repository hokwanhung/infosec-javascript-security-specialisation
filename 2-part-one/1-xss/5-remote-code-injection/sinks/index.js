'use strict';

const app = require('express')();

app.get('/', (req, res) => {

    // eval() can accept any strings and execute it as JavaScript code.
    // popular for running generated scripts in template rendering.
    eval(req.query.run);
    res.end('ok\n');
});

app.listen(8080);