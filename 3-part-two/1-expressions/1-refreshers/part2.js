'use strict';

// RegExp.prototype.exec and RegExp.prototype.test
const reg = /ab/g;
const str = 'abab';
const str2 = 'qwerty';

// console.log(reg.exec(str)); // either to return a table, or null.

console.log(reg.exec(str)); // return first match - cursor 2
console.log(reg.exec(str)); // return second match - cursor 4 
console.log(reg.exec(str)); // return null - cursor 0
console.log(reg.exec(str)); // return first match - cursor 2

// This is becuase regex in JavaScript has a state. 
// As a result, this is not recommended as it might provide unexpected results of the embedded cursor.

console.log(reg.test(str)); // return true
console.log(reg.test(str2)); // return false