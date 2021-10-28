const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`🛑 Assertion Failed: "${actual}" === "${expected}"`);
    }
   
};
const countLetters = function(sentence){
   const obj={}
   for(let char of sentence){
       if (obj[char]){
       obj[char]+=1
       } else {
        obj[char]= 1
       } 
       

   }
        
    return obj

}

console.log(countLetters("lhl"))