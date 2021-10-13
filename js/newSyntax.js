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
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof age !== 'number')
      throw new TypeError('Age mus be a number');
    if (age < 0 || age > MAX_AGE)
      throw new RangeError(
        `Age must be >0 and <${MAX_AGE}`
      );
    this._age = age;
  }
  getFullName() {
    return `${this.name} ${this.sname}`;
  }
  isAdult() {
    return this.age >= ADULT_AGE;
  }
}

const u2 = new UserClass('Tim', 'Lee', 50);
const u3 = new UserClass('Bruse', 'Lee', 75);
u2.age = 49; //setter
console.log(u2.age); //getter

class Employee {
  constructor(fname, lname, rate) {
    this.fname = fname;
    this.lname = lname;
    this.rate = rate;
  }
  getSalary(dayCount) {
    return dayCount * this.rate;
  }
}

const emp1 = new Employee('Elon', 'Musk', 50);
console.log(emp1.getSalary(30));
