const object = {
  display: 'flex',
  margin: 15,
  justifyContent: 'center',
  visibility: true,
  resize: function () {
    return 'resize';
  },
};

const cat = {
  name: 'Muha',
  isMale: false,
  color: 'gray',
  breed: 'yard',
  age: 2,
  weight: 3,
  isSleeping: true,
  say: function () {
    return 'meow';
  },
  run: function () {
    return 'running';
  },
};

cat.legsCount = 4;
cat.newProp = function () {};

console.log(cat);

cat.age++;
delete cat.isSleeping;
console.log(cat.say());

console.log(cat);
console.log(cat.name);

const cat = {
  name: 'Jirobasik',
  isMale: true,
  color: 'bandicoon',
  age: 3,
  weight: 6,
  isSleeping: false,
  say: function () {
    return 'meow meow';
  },
  run: function () {
    return 'walking';
  },
};


