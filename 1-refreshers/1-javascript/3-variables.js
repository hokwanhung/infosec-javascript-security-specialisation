// 'use strict'; - force declaring the variable, but not using it before declarations.
// Avoid var as much as possible.

x = 10;
var x; // poorly scoped - implicitly declared at the top of the code.
console.log(x);

let y; // must declare before using it (same with const).
y = 10;
console.log(y);


const z = 10; // must be initialized when declared.
// z++; - TypeError
console.log(z);

const aa = {};
aa.foo = 10; // Only the reference is not able to be modified.
console.log(aa.foo);