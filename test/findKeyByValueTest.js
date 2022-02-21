const findKeyByValue = require("../findKeyByValue");
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sciFi: "Black Mirror",
  comedy: "Modern Family",
  drama:  "Ozark"
};

describe("#findKeyByValue", () => {
  it("returns 'drama' for 'Ozark'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Ozark"), "drama");
  });

  it("returns undefined for 'That 70's Show'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);
  });
});
