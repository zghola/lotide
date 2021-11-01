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
    if(array.length <= 2 ){
        return []
    }
    if(array.length % 2 === 0){
        const index2 = array.length / 2
        const index1 = index2-1
        const value1 = array[index1]
        const value2 = array[index2]
        return [value1, value2]
    } 
    const index = (array.length -1) / 2  
    const value = array[index]
    return [value]
}
module.exports = middle