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

const without = function(sourceArray, itemsToRemoveArray) {
    let newArray = [];
  
    for (let i = 0; i < sourceArray.length; i++) {
      if (sourceArray[i] instanceof Object) {
        newArray.push(without(sourceArray[i], itemsToRemoveArray));
      } else if (!itemsToRemoveArray.includes(sourceArray[i])) {
        newArray.push(sourceArray[i]);
      }
    }
    return newArray;
  };

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]