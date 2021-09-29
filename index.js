const convertToNumber = function (value) {
  if (
    value === '' ||
    value === null ||
    isNaN(Number(value))
  ) {
    return NaN;
  }
  return Number(value);
};

const isAdult = function (age, AGE_ADULT = 18) {
  if (isNaN(age)) return null;
  return age >= AGE_ADULT;
};

let age = '17';
let changedAge = convertToNumber(age);
console.log(isAdult(changedAge));

console.log(isAdult(convertToNumber(20)));
console.log(isAdult(convertToNumber(2)));
console.log(isAdult(convertToNumber(18)));
console.log(isAdult(convertToNumber(17)));
