'use strict';

function f() { } // function object in memory

const x = function () {
    return 10;
}; // referencing variable to a function that has no name.

const arrow = (z) => z * 1;
const arrow2 = (z) => {
    return z * 1;
} // arrow function

const newFunction = new Function('a', 'b', 'return a + b;'); // dangerous to string injections.
console.log(newFunction.toString());