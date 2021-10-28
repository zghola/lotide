const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`🛑 Assertion Failed: "${actual}" === "${expected}"`);
    }
   
};

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

  
const letterPositions = function(sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== " ") {
        results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i];
      }
    }
    return results;
  };
  
  console.log(letterPositions("lighthouse in the house"))