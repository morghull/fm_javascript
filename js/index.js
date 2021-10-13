'use strict';

const pow = (num, pow) => {
  if (typeof num !== 'number' || typeof pow !== 'number') {
    return new TypeError('Value must be number');
  }
  if (pow < 0) {
    return new RangeError(
      'Invalid value pow. Pow must be > 0'
    );
  }
  if (pow === 0) return 1;
  return num * pow(num, pow);
};
console.log(pow('ten', 2));
console.log(pow(2, -2));
