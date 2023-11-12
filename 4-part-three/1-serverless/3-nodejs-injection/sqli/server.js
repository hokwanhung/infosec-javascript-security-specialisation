// Injections are still the OS top 10 in security issues by OWASP.
// 
'use strict';
const app = require('express')();
const connection = require('./db').connection;

app.get('/post/:id', (req, res, next) => {
    // const query = `SELECT post.title, post.content, u.firstName, u.lastName FROM posts AS post
    // INNER JOIN users u on post.author = u.id
    // WHERE post.id = ${req.params.id};`; // the problem is that the parameters is actually concatenated.

    const query = `SELECT post.title, post.content, u.firstName, u.lastName FROM posts AS post
    INNER JOIN users u on post.author = u.id
    WHERE post.id = ?;`; // tell the sqldriver to consider anything replacing the question mark as trolls only, instead of executable codes.

    console.log('Running query:\n', query);

    connection.query(query, [req.params.id], (err, results) => {
        if (err) {
            return next(err);
        }
        if (results.length === 0) {
            res.status(404);
            return res.end();
        }
        return res.json(results);
    });
}); // there are tools like sqlmap that would actually run the injection for you, 
// which drops and displays the content of the database.

// Regarding blind sql injections,
app.get('./authors/:id/posts/count', (req, res, next) => {
    // By doing timing attacks, the malicious users could detect the word contents bits by bits.
    // connection.query(`SELECT * FROM posts WHERE author = ${req.params.id};`, (err, results) => {
    connection.query(`SELECT * FROM posts WHERE author = ?`, [req.params.id], (err, results) => {
        if (err) {
            return next(err);
        }

        if (results.length === 0) {
            res.status(404);
            return res.end();
        }
        res.json({ count: results.length });
    });
});

app.listen(8080);