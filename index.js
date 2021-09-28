alert("I'm teacher");
let userInput = prompt('Enter number: ');

let isNotNumber =
  userInput === '' ||
  userInput === null ||
  isNaN(Number(userInput));

if (isNotNumber) {
  console.log('error');
} else {
  console.log('well done');
}

// console.log(userInput);
// console.log(isNaN(Number(userInput)));
// console.log(typeof Number(userInput));
