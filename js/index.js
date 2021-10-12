'use strict';

const str = 'to    be     or        not to be';

const capitalize = (input) =>
  input
    .replace('  ', ' ')
    .split(' ')
    .map(
      (word) =>
        word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');

console.log(capitalize('asd asd as dasd asd s'));
