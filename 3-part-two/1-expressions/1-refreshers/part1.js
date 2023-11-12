'use strict';
// first method: build regular expression directly.
// flags are used for information on who the regular expressions are applied to.

// flag -g for global scope.
const re1 = /a+/g;

// flag -i for case-insensitves.
const re2 = /foo/i;

// second method: build regular expression through the constructor.
const re3 = new RegExp('foo', 'i');
console.log(re2, re3); // same expressions.

