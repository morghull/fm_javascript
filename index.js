//task1
const checkMultiplicity = function (devident, devisor) {
  return devident % devisor === 0;
};

console.log(checkMultiplicity(20, 4));
console.log(checkMultiplicity(20, 3));

//task2
const checkHitIntoDiapason = function (
  checkedNumber,
  minDiapasonBorder,
  maxDiapasonBorder
) {
  return (
    checkedNumber >= minDiapasonBorder &&
    checkedNumber <= maxDiapasonBorder
  );
};

//task3
const checkTriangleSides = function (
  sideOne,
  sideTwo,
  sideThree
) {
  return (
    sideOne + sideTwo > sideThree &&
    sideTwo + sideThree > sideOne &&
    sideThree + sideOne > sideTwo
  );
};

//task4
const solveSquare = function (a, b, c) {
  const D = b * b - 4 * a * c;
  if (D < 0) {
    return null;
  }
  if (D === 0) {
    const x = -b / (2 * a);
    return x;
  }
  const x1 = (-b + D ** 0.5) / (2 * a);
  const x2 = (-b - D ** 0.5) / (2 * a);
  return [x1, x2];
};
