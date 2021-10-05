const createMultiplicationTable = function (
  min = 33,
  max = 35
) {
  const table = {};
  for (let i = min; i <= max; i++) {
    for (let j = min; j <= max; j++) {
      table[`${i} * ${j} = `] = i * j;
    }
  }
  return table;
};

console.log(createMultiplicationTable());

const getResultOfMultiplication = function (
  expression,
  table
) {
  return table[expression];
};
const table = createMultiplicationTable(1, 10);
console.log(getResultOfMultiplication('2 * 2 = ', table));
console.log(getResultOfMultiplication('3 * 8 = ', table));
console.log(getResultOfMultiplication('4 * 5 = ', table));
console.log(getResultOfMultiplication('2 * 9 = ', table));
