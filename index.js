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

const getSumTwoNums = function () {
  let userInput1 = prompt('enter first number');
  let userInput1 = prompt('enter second number');

  let checkEmpty =
    userInput1 === '' ||
    userInput1 == null ||
    userInput2 === '' ||
    userInput2 == null;
  let sum = Number(userInput) + Number(userInput2);

  if (checkEmpty || isNaN(sum)) {
    console.log('error');
  } else {
    console.log(userInput1, '+', userInput2, '=', sum);
  }
};

getSumTwoNums();
