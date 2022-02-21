//function "without" pushes a new array without
//the "unwanted" input included in that new array
const without = function(arr, unwanted) {
  const output = [];
  for (let element of arr) {
    if (!unwanted.includes(element)) {
      output.push(element);
    }
  }
  return output;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

module.exports = without;