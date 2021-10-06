const obj1 = {};
const obj2 = Object();
const obj3 = new Object();

console.log(obj1);
console.log(obj2);
console.log(obj3);

function MyObj() {
  //директива new создает пустой объект для ф-ции конструктора
  //указатель на новый объект - this
  if (!new.target) {
    console.log('must be new');
    return new MyObj();
  }
}

const myObj = MyObj();
console.log(myObj);

const myObj2 = new MyObj();
console.log(myObj2);
