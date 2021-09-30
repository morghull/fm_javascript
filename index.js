// const isAdult = function (age) {
//   return (age >= 18 ? '' : 'not ') + 'adult';
// };

// console.log(isAdult(18));
// console.log(isAdult(12));

// //function with conditional operator
// const messageCheck = function (message = '') {
//   let isValid = typeof message === typeof '' && message;
//   return isValid ? 'thank you' : 'invalid message';
// };
// let userMessage = prompt('Type something, please: ');
// console.log(messageCheck(userMessage));
// console.log(messageCheck(8));

//
let userInput = 9;
let expectedNumber = +userInput;

if (isNaN(expectedNumber)) {
  console.log('invalid input');
} else if (expectedNumber > 0) {
  if (expectedNumber % 5 === 0) {
    console.log('can be devided by 5');
  } else if (expectedNumber % 3 === 0) {
    console.log('can be devided by 3');
  } else if (expectedNumber % 2 === 0) {
    console.log('can be devided by 2');
  }
} else {
  console.log('negative number, must be positive');
}
