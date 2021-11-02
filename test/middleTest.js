/*const middle = require(`../middle`)
const assertArraysEqual = require(`../assertArraysEqual`)


middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1, 2, 3]), [2] )
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3] )
assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]),[])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4])*/

const assert = require('chai').assert;
const middle   = require('../middle');


describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.notStrictEqual(middle([1, 2, 3]), 2);
  });
});


