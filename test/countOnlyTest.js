const countOnly = require("../countOnly");
const assert = require('chai').assert;


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("returns undefined for ['Karima'] ", () => {
    assert.equal(result1["Karima"], undefined);
  });

  it("returns 2 for ['Fang']", () => {
    assert.equal(result1["Fang"], 2);
  });
});