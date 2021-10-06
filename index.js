// function t(){};

// console.dir(t);

// console.dir(function(){});

function MyArray() {
  this.length = 0;
  
  this.push = function (item) {
    this[this.length] = item;
    this.length++;
    return this.length;
  };
}

const myArray = new MyArray();
const myArray2 = new MyArray();
console.log(myArray.push === myArray2.push);//false

const arr = [];
arr.push(1);
arr.push(12);

const arr2 = [];
console.log(arr.push === arr2.push);//true
