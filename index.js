const sum = function (a, b) {
  return a + b;
};
const sub = function (a, b) {
  return a - b;
};
const mult = function (a, b) {
  return a * b;
};
const div = function (a, b) {
  return a / b;
};
const rem = function (a, b) {
  return a % b;
};

const highOrderFunction = function (num1, num2, func) {
  return func(num1, num2);
};
const res = highOrderFunction(6, 5, mult);

console.log(calculate());
console.log(calculate(2, 8, '*'));

console.log(res);
