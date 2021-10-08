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
  this.unshift = function () {
    for (let i = arguments.length - 1; i >= 0; i--) {
      if (
        arguments[i] instanceof MyArray ||
        arguments[i].constructor === Array
      ) {
        for (let j = arguments[i].length - 1; j >= 0; j--) {
          let value = arguments[i][j];
          for (let k = 0; k <= this.length; k++) {
            const buffer = this[k];
            this[k] = value;
            value = buffer;
          }
          this.length++;
        }
      } else {
        let value = arguments[i];
        for (let j = 0; j <= this.length; j++) {
          const buffer = this[j];
          this[j] = value;
          value = buffer;
        }
        this.length++;
      }
    }
    return this.length;
  };
  this.reverse = function () {
    let i = 0;
    let j = this.length - 1;
    while (i < j) {
      const buffer = this[i];
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
  this.forEach = function (func) {
    for (let i = 0; i < this.length; i++) {
      func(this[i]);
    }
  };
  this.some = function (func) {
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) return true;
      return false;
    }
  };
  this.every = function (func) {
    for (let i = 0; i < this.length; i++) {
      if (!func(this[i])) return false;
    }
    return true;
  };
  this.filter = function (func) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) result.push(this[i]);
    }
    return result;
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

const concatArray1 = new MyArray([1, 2, 3]);
const concatArray2 = new MyArray(4, 5, 6);
const concatedArray = new MyArray().concat(
  concatArray1,
  concatArray2
);
console.log('concat:', concatedArray);

const reverseArray = new MyArray(1, 2, 3);
console.log('reverse:', reverseArray.reverse());

const pushArray = new MyArray(1, 2, 3);
pushArray.push(4,[5],new MyArray(6));
console.log('push:', pushArray);

const unshiftArray = new MyArray(1, 2, 3);
unshiftArray.unshift(4,[5],new MyArray(6));
console.log('unshift:', unshiftArray);
