'use strict';
const app = require('express')();
const fs = require('fs');
const Path = require('path');
const Busboy = require('busboy');

app.post('/upload', (req, res, next) => {
    const busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function (fieldname, file) {
        const out = fs.createWriteStream(Path.join(__dirname, 'files', fieldname));
        file.pipe(out);
    });
    busboy.on('finish', function () {
        res.end('upload ok\n');
    });
    res.pipe(busboy);
});

app.get('/users/:id', (req, res, next) => {
    const data = require('./users/' + req.params.id);
    return res.json(data);
}); // use encodeURIComponent([path_name]) to actually reach the destination similar in file system,
// then place the encoded string in the URL place.

// 2. Compare the input with target path.
const publicPath = Path.join(__dirname, 'pages');

// Regarding path injections,
app.get('/:path', (req, res, next) => {
    // 1. never concatenate path yourself.
    // const filePath = __dirname + '/pages' + req.params.path;
    const filePath = Path(__dirname, '/pages', req.params.path); // at least this is normalize, but not enough still.
    // console.log(Path.dirname(filePath));
    // console.log(publicPath);
    if (Path.dirname(filePath) !== publicPath) {
        return res.end('no attacks here');
    }
    const read = fs.createReadStream(filePath);
    read.pipe(res);
    read.on('error', (err) => {
        next(err);
    });
    read.on('finish', () => {
        res.end();
    });
});

