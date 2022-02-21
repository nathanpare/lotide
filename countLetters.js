//function countLetters counts the amount of occurences of each
//character of the given string
const countLetters = function(string) {
  //declare empty object
  const output = {};
  //iterate over string
  for (let char of string) {
    //ignore spaces in string
    if (char !== " ") {
      //if there is already an entry for that char, increment value
      if (output[char]) {
        output[char]++;
        //if no entry give value 1
      } else {
        output[char] = 1;
      }
    }
  }
  return output;
};

console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;