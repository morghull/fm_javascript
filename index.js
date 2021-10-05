const user = {
  firsName: 'Elon',
  lastName: 'Musk',
  age: 50,
  isMale: true,
};

const sayHello = function (obj) {
  return `Hello, ${obj.firsName} ${obj.lastName}!`;
};

console.log(sayHello(user));

const user2={
  firsName: 'Tim',
  lastName: 'Li',
  age: 15,
  isMale: true,
};

console.log(sayHello(user2));