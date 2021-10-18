'use strict';

class Animal {
  constructor(name, amountOfLegs, type) {
    this.name = name;
    this.amountOfLegs = amountOfLegs;
    this.type = type;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be strig');
    this._name = name;
  }
  eat() {
    return `${this.name} is eating`;
  }

  static isAnimal(obj) {
    return obj instanceof Animal;
  }
}

const cat1 = new Animal('Pushok', 4, 'cat');
const dog1 = new Animal('Rem', 4, 'dog');