/*const assertEqual = require('../assertEqual');




assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);*/

const assert = require('chai').assert;
const assertEqual   = require('../assertEqual');
 
describe("#assertEqual", () => {
  it("returns 1 for 1", () => {
    assert.Equal(assertEqual ([1]), 1);
  });
});


