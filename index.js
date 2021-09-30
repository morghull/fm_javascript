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
const calculate = function (
  num1 = 1,
  num2 = 2,
  operator = '+'
) {
  if (isNaN(num1 * num2)) {
    return false;
  }
  let f = null;
  switch (operator) {
    case '+':
      f = sum;
      break;
    case '-':
      f = sub;
      break;
    case '*':
      f = mult;
      break;
    case '/':
      f = div;
      break;
    case '/':
      f = rem;
      break;
    // default:
    //   return null;
  }
  return typeof f === 'function' ? f(num1, num2) : f;
};

console.log(calculate());
console.log(calculate(2, 8, '*'));
