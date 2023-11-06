'use strict';

console.log(1 == '1'); // true
console.log(1 === '1'); // false - enforce type checking (always use).

// all of the below are falsies (!! = falsy checking).
console.log(!!false);
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);