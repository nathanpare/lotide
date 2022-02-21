//function tail returns a new array including all indexes
//of the given array excluding the first index
const tail = function(words) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      continue;
    } else {
      arr.push(words[i]);
    }
  }
  return arr;
};
module.exports = tail;
