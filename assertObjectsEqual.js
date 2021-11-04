
const eqObjects = function (object1, object2) {
     
    for( let obj in object1){
        
        for (let objc in object2){
        
            if (obj === objc){
                return true
            }else{
                return false
            }

        }
    }
    
}

// FUNCTION IMPLEMENTATION


let obj = { a: '1', b: 2 }
let objc = { b: 2, a: '1' }

const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; 
    
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${inspect(actual)}  === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }   

};
assertObjectsEqual('obj', 'objc')




  