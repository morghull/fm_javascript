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
const users = createRundomUser(100);
users.forEach(function (user) {
  user.isSubscribed = Math.random() > 0.5;
});
console.table(users);

//const fullNameUsers = users.map((u) => u.fullName());
const fullNameUsers = users.map(function (user) {
  return user.fullName();
});
console.table(fullNameUsers);

//const retiredUsers = users.filter((user) => user.age > 65);
const retiredUsers = users.filter(function (user) {
  return user.age > RETIRE_AGE;
});

console.table(retiredUsers);

const fittedUsers = users.filter(function (user) {
  return (
    user.age <= 40 && !user.isMale && user.isSubscribed
  );
});
console.table(fittedUsers);
