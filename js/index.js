'use strict';

/*
Инкапсуляция
Наследование
ПОлиморфизм
 */

class User {
  constructor(name, sname, age) {
    this.name = name;
    this.sname = sname;
    this.age = age;
    this.isBanned = false;
  }
  getFullName() {
    return `${this.name} ${this.sname}`;
  }
  static isUser(obj) {
    return obj instanceof User;
  }
}

const user = new User('Test', 'STest', 33);

class Moderator extends User {
  constructor(name, sname, age, rule) {
    super(name, sname, age);
    this.rule = rule;
  }
  addMessage(message) { }
  removeMessage(id) { }
}

class Admin extends User {
  constructor(name, sname, age) {
    super(name, sname, age);
  }
  toggleBan(user) {
    if (!User.isUser(user)) throw new TypeError('Only user can be banned');
    user.isBanned = !user.isBanned;
  }
}

