'use strict';

const power = (num, pow) => {
  if (pow === 1) {
    return num;
  }
  return num * power(num, pow - 1);
};

console.log(power(2, 2));
console.log(power(2, 3));
console.log(power(2, 4));

const factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
