/*logic*/
function MyArrayProto() {
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      if (
        arguments[i] instanceof MyArray ||
        arguments[i].constructor === Array
      ) {
        for (let j = 0; j < arguments[i].length; j++) {
          this[this.length++] = arguments[i][j];
        }
      } else this[this.length++] = arguments[i];
    }
    return this.length;
  };
  this.reverse = function () {
    let i = 0;
    let j = this.length - 1;
    while (i < j) {
      let buffer = this[i];
      this[i] = this[j];
      this[j] = buffer;
      i++;
      j--;
    }
    return this;
  };
  this.pop = function () {
    if (this.length === 0) return;
    const item = this[--this.length];
    delete this[this.length];
    return item;
  };
  this.concat = function () {
    const result = new MyArray();
    result.push(this);
    for (let i = 0; i < arguments.length; i++) {
      result.push(arguments[i]);
    }
    return result;
  };
  this.slice = function (begin, end = this.length) {
    const result = new MyArray();
    for (let i = begin - 1; i < end; i++) {
      result.push(this[i]);
    }
    return result;
  };
  this.includes = function (searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === searchElement) return true;
    }
    return false;
  };
}
/*data*/
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}
/*prototype*/
MyArray.prototype = new MyArrayProto();

MyArray.prototype.newMethod = function () {
  return 'new method';
};
Array.prototype.newMethod = function () {
  return 'new method';
};

const task1Array1 = new MyArray([1, 2, 3]);
const task1Array2 = new MyArray(4, 5, 6);
const task1ConcatArray = new MyArray().concat(
  task1Array1,
  task1Array2
);
console.log('concat:', task1ConcatArray);
console.log('reverse:', task1Array1.reverse());
