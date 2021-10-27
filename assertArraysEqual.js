// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
    if(arr1.length !== arr2.length)
    return false;

    for(let i = 0; i < arr1.length; i+= 1){
    if (arr1[i] !== arr2[i]) {
      return false;
      }
    }
    return true

};
const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
    console.log(`🛑 Assertion Failed: [${actual}] === [${expected}]`);
    }
};

const middle = function(array) {
    
        if(array.length % 2 === 0) {
          console.log("middle nums when array length is even: " + array[middle - 1]  + " " + array[middle]);
        } else {
          console.log("middle num when array length is odd: " + array[middle]);
        }
      

}
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]