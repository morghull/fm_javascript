const rabbit = {
  color: 'white',
  jump: function () {
    return `i'm jumping`;
  },
};

const rabbitDom = {
  name: 'pushie',
  pet: function () {
    return 'pet me';
  },
};
rabbitDom.__proto__ = rabbit;

const rabbitMagic = {
  say: function (word) {
    return `and i'm saying ${word}`;
  },
};
rabbitMagic.__proto__ = rabbitDom;

console.log(rabbitMagic.say('hello'));
console.log(rabbitMagic.pet());
console.log(rabbitMagic.jump());
