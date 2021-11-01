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

  const tail = function(array){
    let newArray = []
    for (let i = 1; i < array.length; i++) {
      newArray.push(array[i])
    }
    return  newArray
  }

  module.exports = tail