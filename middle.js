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

console.log(middle([1]));
console.log(middle([1, 2])); 
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); //[3]
console.log(middle([1, 2, 3, 4]));// => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); //[3,4]