function User(
  firstName,
  lastName,
  age,
  isMale,
  email,
  isSubscribed = false
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

function UserPrototype() {
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
User.prototype = new UserPrototype();

function createRundomUser(amount = 1) {
  const db = [];
  for (let i = 0; i < amount; i++) {
    const user = new User(
      `Name${i}`,
      `Lname${i}`,
      Math.ceil(Math.random() * 60 + 20),
      Math.random() > 0.5,
      `Name${i}Lname${i}@gmail.com`
    );
    db.push(user);
  }
  return db;
}
const users = createRundomUser(50);
console.table(users);