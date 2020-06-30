const { add } = require("./index");

test("add", () => {
  expect(add(2, 2)).toEqual(4);
});
