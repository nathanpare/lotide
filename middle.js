//function middle return a new array including the middle index
//of the array if odd, if even it returns the two most center indexes
const middle = function(array) {
  let arr = [];
  if (array.length % 2 === 0 && array.length > 2) {
    arr.push(array[(array.length / 2)-1])
    arr.push(array[(array.length / 2)])
  } else { 
    if (array.length > 2) {
      arr.push(array[Math.floor(array.length / 2)]);
    }
  }
  return arr;
};

module.exports = middle;