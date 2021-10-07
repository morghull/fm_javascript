/*logic*/
function MyArrayProto() {
    this.push = function () {
      for (let i = 0; i < arguments.length; i++) {
        this[this.length++] = arguments[i];
      }
      return this.length;
    };
    this.pop = function () {
      if (this.length === 0) return;
      const item = this[--this.length];
      delete this[this.length];
      return item;
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
    //this.push(arguments);
  }
  /*prototype*/
  MyArray.prototype = new MyArrayProto();
  
  MyArray.prototype.newMethod = function () {
    return 'new method';
  };
  Array.prototype.newMethod = function () {
    return 'new method';
  };
  
  const myArray = new MyArray();
  const myArray2 = new MyArray();
  myArray.push(2, 3, 4, 5, 6, 7, 8, 1, 2);
  myArray.push(12, 13, 14, 15, 16, 17, 18, 11, 23);
  console.log(myArray);
  console.log(myArray.push === myArray2.push); //true
  
  const testArr = myArray.slice(17);
  console.log(testArr);