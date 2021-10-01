const toNumber = function (number) {
  if (isNaN(number) || number === null) return null;
  return Number(number);
};
const factorialCalc = function (number = 3) {
  if (number > MAX_FACTORIAL_BASIS) return false;
  if (number < 0) return null;
  let result = 1n;
  for (let i = 1; i <= number; i++) {
    result *= BigInt(i);
  }
  return result;
};

console.log(factorialCalc(toNumber()));
console.log(factorialCalc(toNumber(3)));
console.log(factorialCalc(toNumber(4)));
console.log(factorialCalc(toNumber('4')));
console.log(factorialCalc(toNumber(null)));
console.log(factorialCalc(toNumber('0')));
console.log(factorialCalc(toNumber(1)));
console.log(factorialCalc(toNumber(-9)));
console.log(factorialCalc(toNumber('qweasd')));
console.log(factorialCalc(toNumber(555)));
