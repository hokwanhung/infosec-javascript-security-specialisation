// Remote code injections happen when arbitrary code is run on a machine that is not yours.
// XSS is more than just a subcase of HTML execution, but of remote code execution.

// How to turn arbitrary string into executable script of code?
eval('console.log("Hello World!")');

var i = 1;
eval('++i'); // i = 2; - have access to the world's scope.

console.log(i); // 2

// generate an anonymous function.
const f1 = new Function('a', 'b', 'return a + b');

// throw error - much more safer than evall() - as new Function() cannot access world scope.
const f2 = new Function('a', 'b', 'return ++i');

console.log(f1(5, 6));

// Conclusion: Don't use eval() or new Function(), and if must, don't use concatenated strings, and if must, 
// don't use concatenated strings that come from end users.

// other methods to run arbitrary code for node.js:
const vm = require('vm');
vm.runInNewContext('console.log(10)');

// static import - not a remote code execution.
// import { f } from './lib.mjs';

// dynamic import - varied URLs mean it could load arbitrary scripts from outside,
// or data-compacted objects with arbitrary JavaScript.
const { f } = await import('./lib.mjs');

f();

// Conclusion: Don't use the above methods in production, and if must, never use it with any input that comes from the user.