const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return (`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  return string.split(' ').reduce(function(a, b) {
    b.split('').reduce(function(c, d) {
      return (c[d] = (c[d] || 0) + 1 , c);
    }, a[b] = {});

    return a;
  }, {});
}

console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;