const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
function tail(words) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      continue;
    } else {
      arr.push(words[i])
    } 
  } 
  return arr;
}; 
tail(words);
console.log(tail(words));