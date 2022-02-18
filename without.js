const eqArrays = require("./eqArrays");


const without = function(arr, unwanted) {
  const output = [];
  for (let x of arr) {
    if (!unwanted.includes(x)) {
      output.push(x);
    } 
  } 
  return output;
}

console.log(without([1, 2, 3], [1])); 
console.log(without(["1", "2", "3"], [1, 2, "3"]));

module.exports = without;