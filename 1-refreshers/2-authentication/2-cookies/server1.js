'use strict';

const app = require('express')();
const fs = require('fs');

const page = fs.readFileSync('./page.html').toString();

app.get('/', (req, res) => {
    // everytime the browser request, it would then put this in the header.
    // for some reasons, Max-Age would not be set - but based on client-side time.
    // Cookies are by default on the same domain.
    // The cookies with "HttpOnly" is not available with JS code.
    // The cookies with "Secure" allows HTTPS access only, but not HTTP accesses.
    // The cookies with "SameSite" is newly implement, with values of "Strict"(same-domain only), "Lax"(sub-domain available), "None"(no policy).
    res.setHeader('Set-Cookie', ['server_name=server1', 'other=me; Max-Age=86400', 'http=only; HttpOnly']); // use document.cookie to check all cookies.
    res.setHeader('Content-type', 'text/html');
    res.end(page);
});

// use fetch('/print') on the browser to activate this.
app.get('/print', (req, res) => {
    console.log(req.headers);
    res.end('ok\n');
});

app.listen(3000);

// Zombie-cookie = reset the cookies from the localStorage, sessionStorage, or database.
// 