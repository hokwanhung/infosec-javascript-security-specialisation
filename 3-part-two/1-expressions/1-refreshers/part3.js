'use strict';

/*
String.prototype.match;
String.prototype.matchAll;
String.prototype.search;
String.prototype.replace;
String.prototype.replaceAll;
String.prototype.split;
*/

const reg = /ab/g;
const str = 'ababababababab';
const str2 = 'foofoofoofoofoofoo';

// currently gives results similar to matchAll() or replaceAll() - because of the -g flag.

console.log(str.match(reg)); // all 'ab's
console.log(str.match(reg)); // all 'ab's
console.log(str2.match(reg)); // null
console.log(str2.match(reg)); // null

// search() gives first index of the pattern.
console.log(str.search(reg)); // 0
console.log(str2.search(reg)); // -1

console.log(str.replace(reg, 're')); 
console.log(str2.replace(reg, 're'));

// currently return an array of '' as all words are treated as seperators.
console.log(str.split(reg));
console.log(str2.split(reg));

// Use https://www.regex101.com (with JavaScript selected) to build regex.
// () (capture) would return a substring of the matching substring.
// + or -{1,} would return the matching pattern as a whole group.
// ^ assert position at the start of the line, while -$ flag? assert the position at the end of the line.
