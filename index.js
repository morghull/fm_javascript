let monthInput = '12';
let expectedMonthNumber = monthInput;

switch (expectedMonthNumber) {
  case '1':
  case '2':
  case '12':
    console.log('winter');
    break;
  case '3':
  case '4':
  case '5':
    console.log('spring');
    break;
  case '6':
  case '7':
  case '8':
    console.log('summer');
    break;
  case '9':
  case '10':
  case '11':
    console.log('fall');
    break;
  default:
    console.log('invalid data');
    break;
}

if (isNaN(expectedMonthNumber)) {
  console.log('invalid input');
} else if (['1', '2', '12'].includes(expectedMonthNumber)) {
  console.log('winter');
} else if (['3', '4', '5'].includes(expectedMonthNumber)) {
  console.log('spring');
} else if (['6', '7', '8'].includes(expectedMonthNumber)) {
  console.log('summer');
} else if (
  ['9', '10', '11'].includes(expectedMonthNumber)
) {
  console.log('fall');
} else {
  console.log('invalid data');
}
