'use strict';

class UserClass {
  /**
   *
   * @param {string} name
   * @param {string} sname
   * @param {number} age
   */
  constructor(name, sname, age) {
    this.name = name;
    this.sname = sname;
    this.age = age; //setter
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get sname() {
    return this._sname;
  }
  set sname(sname) {
    this._sname = sname;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof age !== 'number')
      throw new TypeError('Age must be a number');
    if (age < 0 || age > MAX_AGE)
      throw new RangeError(
        `Age must be >0 and <${MAX_AGE}`
      );
    this._age = age;
  }
  get fullName() {
    return `${this.name} ${this.sname}`;
  }
  set fullName(newFullName) {
    if (typeof newFullName !== 'string')
      throw new TypeError('Full name must be string');
    const arrFullName = newFullName.split(' ');
    if (arrFullName.length !== 2)
      throw new RangeError(
        'Full name must contain two words!'
      );
    this.name = arrFullName[0];
    this.sname = arrFullName[1];
  }
  isAdult() {
    return this.age >= ADULT_AGE;
  }

  static createTestUser() {
    new UserClass('Test', 'Static', 35);
  }
}

const u2 = new UserClass('Tim', 'Lee', 50);
const u3 = new UserClass('Bruse', 'Lee', 75);
u2.age = 49; //setter
console.log(u2.age); //getter
console.log(u2.fullName);
u2.fullName = 'Some User';
console.log(u2.fullName);

class Employee {
  constructor(fname, lname, rate) {
    this.fname = fname;
    this.lname = lname;
    this.rate = rate;
  }
  get fname() {
    return this._fname;
  }
  set fname(fname) {
    this._fname = fname;
  }
  get lname() {
    return this._lname;
  }
  set lname(lname) {
    this._lname = lname;
  }
  getSalary(dayCount) {
    return dayCount * this.rate;
  }
  get rate() {
    return this._rate;
  }
  set rate(rate) {
    if (typeof rate !== 'number')
      throw new TypeError('Rate must be a number');
    if (rate < 0) throw new RangeError('Rate must be >0');
    this._rate = rate;
  }
}

const emp1 = new Employee('Elon', 'Musk', 50);
console.log(emp1.getSalary(30));
