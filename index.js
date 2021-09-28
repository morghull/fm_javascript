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

//   let checkEmpty =
//     userInput1 === '' ||
//     userInput1 == null ||
//     userInput2 === '' ||
//     userInput2 == null;

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
let userInput1 = prompt('enter second number');

let result = getSumTwoNums(userInput1, userInput1);
if (result === false) {
  console.log('error');
} else {
  console.log(result);
}

// if (checkEmpty || isNaN(sum)) {
//   console.log('error');
// } else {
//   console.log(userInput1, '+', userInput2, '=', sum);
// }
