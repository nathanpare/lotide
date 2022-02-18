const letterPositions = require("../letterPositions");
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for 'hello'", () => {
    assert.deepEqual(letterPositions("hello"), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });

  it("returns { f: [ 0 ], i: [ 1 ], v: [ 2 ], e: [ 3 ] } for 'five'", () => {
    assert.deepEqual(letterPositions("five"), { f: [ 0 ], i: [ 1 ], v: [ 2 ], e: [ 3 ] });
  });
});
