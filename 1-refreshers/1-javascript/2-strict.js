// ES6 modules (import, export stuff) enforces strict mode from legacy JavaScript already.
const x = {};

Object.defineProperty(x, 'foo', {
    value: 10,
    writable: false // disable any overwrite of langauges.
});

console.log('x', x.foo);
x.foo = 11; // no error, just being ignored.
console.log('x', x.foo);

function F() {
    'use strict';
    const y = {};

    Object.defineProperty(y, 'foo', {
        value: 10,
        writable: false // disable any overwrite of langauges.
    });

    console.log(y.foo);
    y.foo = 11; // throw exception only when strict mode is opened.
    console.log(y.foo);
}

F();
