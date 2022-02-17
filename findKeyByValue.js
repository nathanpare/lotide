const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "Black Mirror",
  comedy: "Modern Family",
  drama:  "Ozark"
};

const findKeyByValue = function (object, value) {
for (key in object) {
  if (object[key] === value) {
    return key;
  } 
}
return undefined;
}

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "Ozark"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));

module.exports = findKeyByValue;