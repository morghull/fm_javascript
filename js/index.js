function StudentPrototype() {
  this.toString = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  this.go = function () {
    return `${this.firstName} ${this.lastName} go!`;
  };
  this.eat = function () {
    return `${this.firstName} ${this.lastName} eating`;
  };
}

/**
 * 
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {number} age 
 * @param {boolean} isMale 
 * @returns instance Student
 */
function Student(firstName, lastName, age, isMale) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  //toString,
  if (!new.target) {
    return new Student(
      id,
      firstName,
      lastName,
      age,
      isMale
    );
  }
}
Student.prototype = new StudentPrototype();

const student = Student('Elon', 'Musk', 34, true);
