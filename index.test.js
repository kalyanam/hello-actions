const { sayHello } = require("./index");

test("says hello to the world", () => {
  expect(sayHello()).toBe("Hello, World! 👋");
});

test("says hello to a person", () => {
  expect(sayHello("Kalyan")).toBe("Hello, Kalyan! 👋");
});