function countVowelConsonant(str) {
   let count = 0
   let vowels = ["a","e","i","o","u"]
   let consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]
   str.split("").forEach(char => {
      if(vowels.includes(char.toLowerCase())) {return count ++}
      if(consonants.includes(char.toLowerCase())) {return count += 2}
   })
   return count
 }
 
 
 
 /**
 * Test Suite 
 */
 describe('countVowelConsonant()', () => {
     it('returns total of vowels(1) and consonants(2) to be added', () => {
         // arrange
         const value = 'abcde';
         
         // act
         const result = countVowelConsonant(value);
 
         // log
         console.log("result: ", result);
         
         // assert
         expect(result).toBe(8);
     });
 });