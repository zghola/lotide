const { mediumpurple } = require("color-name");

const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`🛑 Assertion Failed: "${actual}" === "${expected}"`);
    }
   
};

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
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console .log (eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false


