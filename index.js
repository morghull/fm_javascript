const getRangeOfNumbersModeN = function (
  maxBorder,
  minBorder,
  mode
) {
  const result = [];
  for (let num = minBorder; num <= maxBorder; num++) {
    if (num % mode === 0) result.push(num);
  }
  result.sort(function (a, b) {
    return b - a;
  });
  return result;
};

const taskOneResult = getRangeOfNumbersModeN(50, 20, 3);
console.log(taskOneResult);

const checkMath = function (num1, num2, operator) {
  if (
    isNaN(num1) ||
    isNaN(num2) ||
    !['*', '/', '+', '-'].includes(operator)
  ) {
    console.log('Not valid operands!');
    return false;
  }

  while (true) {
    userInput = prompt(`${num1}${operator}${num2}=`);
    if (isNaN(userInput) || userInput === null)
      console.log('Result must be a number!');
    const result = doMath(num1, num2, operator);
    if (!result) {
      console.log('Wrong operator!');
      return false;
    }
    if (
      doMath(num1, num2, operator) === Number(userInput)
    ) {
      console.log('You are right!');
      return true;
    }
    console.log('Try one more time!');
  }
};

const doMath = function (num1, num2, operator) {
  switch (operator) {
    case '*':
      return Number(num1) * Number(num2);
    case '/':
      return Number(num1) / Number(num2);
    case '+':
      return Number(num1) + Number(num2);
    case '-':
      return Number(num1) - Number(num2);
    default:
      return false;
  }
};

//checkMath(1, 2, '+');
