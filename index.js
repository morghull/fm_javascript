const isAdult = function (age) {
  return (age >= 18 ? '' : 'not ') + 'adult';
};

console.log(isAdult(18));
console.log(isAdult(12));

//function with conditional operator
const messageCheck = function (message = '') {
  let isValid = typeof message === typeof '' && message;
  return isValid ? 'thank you' : 'invalid message';
};
let userMessage = prompt('Type something, please: ');
console.log(messageCheck(userMessage));
console.log(messageCheck(8));
