// For Google Cloud:
'use strict';
const test = require('tape');
const { distance } = require('./index');

test('timing test', function (t) { // use AWS Lambda docker image to use with express.
    t.plan(2);

    const req = {
        query: {
            word1: 'foo',
            word2: 'fooo'
        }
    };
    const res = {
        end: function (r) {
            t.equal(r, '1');
        }
    }

    distance(req, res);
    // t.equal(typeof Date.now, 'function');
    // var start = Date.now();

    // setTimeout(function () {
    //     t.equal(Date.now() - start, 100);
    // }, 100);
});

// test('test using promises', async function (t) {
//     const result = await someAsyncThing();
//     t.ok(result);
// });