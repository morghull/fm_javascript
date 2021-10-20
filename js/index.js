'use strict';

const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 2, 34, 4, 6];
//constant complexity O(1)
console.log(arr[4]);

//linear complexity O(n)
const linearSearch = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) return i;
  }
  return -1;
};

//quadratic complexity O(n^2)
const createTableMult = (limit) => {
  const table = [];
  for (let i = 1; i <= limit; i++) {
    for (let j = 1; j <= limit; j++) {
      table.push(`${i}*${j}=${i * j}`);
    }
  }
  return table;
};
console.log(createTableMult(2));

//lorarithmic complexity O(log n)
const sortedArr = [1, 3, 5, 8, 9, 12, 15, 19, 40];
const binarySearch = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;
  let middle;
  while (start <= end) {
    middle = Math.round((start + end) / 2);
    if (arr[middle] === key) return middle;
    if (arr[middle] < key) start = middle + 1;
    if (arr[middle] > key) end = middle - 1;
  }
  return -1;
};
console.log(binarySearch(sortedArr, 40));
