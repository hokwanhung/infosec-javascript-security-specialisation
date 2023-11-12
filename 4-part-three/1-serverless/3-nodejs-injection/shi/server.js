'use strict';
const app = require('express')();
const Child = require('child_process');

app.get('/size/:dir', (req, res, next) => {
    const options = Object.create(null);
    options.env = Object.create(null);
    options.env.NODE_ENV = 'dev';

    // This is dangerous as it can access to the server with arbitrary scripts. 
    // const proc = Child.exec('du -h' + req.params.dir, options);
    const proc = Child.spawn('du', ['-h', req.params.dir], options);

    proc.stdout.pipe(res);
    proc.stderr.on('data', (data) => {

        console.error(data.toString());
    });
    proc.on('end', (code) => {

        console.log(`Process finished with code ${code}`);
        res.end();
    })
});

app.listen(8080);