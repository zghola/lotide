
/*const eqArrays = require(`../eqArrays`)
const assertArraysEqual =  require(`../assertArraysEqual`)
const tail =  require(`../tail`)


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, ["Lighthouse", "Labs"])*/

const expect = require('chai').expect;
const tail   = require('../tail');

describe("#tail", () => {
    it("returns Lighthouse, Labs for Hello, Lighthouse, Labs" , () => {
     // assert.(tail([ 1,2, 3]),[2,3] );
     const actual = tail(["Hello", "Lighthouse", "Labs"]);
     const expected = ["Lighthouse", "Labs"];
     
      expect (actual).to.deep.equal(expected);
    });
  });

 