// oldschool
myFirstFunction();
function myFirstFunction() {
  console.log('text in function 1');
}
myFirstFunction();

//function expression
//mySecondFunction(); returns error
const mySecondFunction = function () {
  console.log('text in function 2');
};
mySecondFunction();

console.log(mySecondFunction);

/**
 *
 * @param {string} value
 * @returns {boolean}
 */
const isNotNumber = function (value) {
  return (
    value === '' || value === null || isNaN(Number(value))
  );
};

/**
 *
 * @param {any} num1
 * @param {any} num2
 * @returns {boolean | number}
 */
const getSumTwoNums = function (num1, num2) {
  if (isNotNumber(num1) || isNotNumber(num2)) {
    return false;
  }
  return Number(num1) + Number(num2);
};

let userInput1 = prompt('enter first number');
let userInput2 = prompt('enter second number');

let result = getSumTwoNums(userInput1, userInput2);
if (result === false) {
  console.log('error');
} else {
  console.log(result);
}

/**
 * check if values have same type
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean}
 */
const sameTypeCheck = function (value1, value2) {
  return typeof value1 === typeof value2;
};
/**
 * returns maximum of two values
 * @param {any} value1
 * @param {any} value2
 * @returns {any|null}
 */
const getMaxOfTwoValues = function (value1, value2) {
  if (!sameTypeCheck) return null;
  if (value1 >= value2) return value1;
  return value2;
};
console.log(getMaxOfTwoValues(userInput1, userInput2));

const isEven = function (number) {
  if (isNotNumber(number)) return null;
  return number % 2 === 0;
};

console.log(isEven('3'));
console.log(isEven('4'));
console.log(isEven('qwe'));