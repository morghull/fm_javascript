'use strict';

const t1 = function (...qq) {
  console.log(arguments);
  console.log(qq);
};

const t2 = (num, ...rest) => {
  console.log('num=', num);
  console.log('rest=', rest);
};

console.dir(t1);
console.dir(t2);
t1(1, 2, 3, 4);
t2(1, 2, 3, 4);

const arrFunc1 = (n) => {
  return n * n;
};
const arrFunc2 = (n) => n * n;
const arrFunc3 = (n) => n * n;

const infinitySum = (...args) => {
  let summ = 0;
  args.forEach((item) => (summ += item));
  return summ;
};
console.log(infinitySum(1, 23, 4));

const infinitySum2 = (...args) =>
  args.reduce((result, n) => result + n);

const arrNums1 = [4, 1, 3, 6];
console.log(infinitySum2(arrNums1));
console.log(infinitySum2(...arrNums1));
