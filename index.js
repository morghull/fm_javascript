/*logic*/ 
function MyArrayProto() {
  this.push = function (item) {
    this[this.length] = item;
    return ++this.length;
  };
}
/*data*/
function MyArray() {
  this.length = 0;
}
/*prototype*/
MyArray.prototype = new myArrayProto();

const myArray = new MyArray();
const myArray2 = new MyArray();
console.log(myArray.push === myArray2.push); //false

const arr = [];
arr.push(1);
arr.push(12);

const arr2 = [];
console.log(arr.push === arr2.push); //true
