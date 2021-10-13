'use strict';

function User(name, sname, age) {
  this.name = name;
  this.sname = sname;
  this.age = age;
}
User.amount = 0;
User.createTest = function () {
  return new User('Anonimous', 'Anonimov', 55);
};

function UserProto() {
  this.getFullName = function () {
    return `${this.name} ${this.sname}`;
  };
}

User.prototype = new UserProto();

const ul = new User('Elon', 'Musk', 50);
