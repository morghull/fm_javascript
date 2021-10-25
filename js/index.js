'use strict';

// destructurisation

const user1 = {
  id: 1,
  name: 'Elon',
  age: 50,
};
const user2 = {
  id: 2,
  name: 'Elen',
  age: 20,
};

const msgElon = ['12', 'hi!', 'bye!'];
const msgElen = ['querty', 'hello', 'add!'];

const userMessages = new Map();
userMessages.set(user1.id, msgElon);
userMessages.set(user2.id, msgElen);

const writeUserMessages = ({ id }, userMessages) => {
  userMessages.get(id).forEach((msg) => {
    console.log(msg);
  });
};

writeUserMessages(user1, userMessages);

const letterCompare = (word1, word2) => {
  const lettersOfWord1 = getLetterCount(word1);
  const lettersOfWord2 = getLetterCount(word2);
  if (lettersOfWord1.size !== lettersOfWord2.size) return false;
  for (const letter of lettersOfWord2.keys()) {
    if (
      !lettersOfWord1.get(letter) ||
      lettersOfWord2.get(letter) !== lettersOfWord1.get(letter)
    )
      return false;
  }
  return true;
};

const getLetterCount = (word) => {
  const lettersOfWord = new Map();
  new Set([...word]).forEach((letter) => {
    lettersOfWord.set(letter, 0);
  });
  [...word].forEach((letter) => {
    lettersOfWord.set(letter, lettersOfWord.get(letter) + 1);
  });
  return lettersOfWord;
};

console.log(letterCompare('test', 'sett')); //true
console.log(letterCompare('test', 'set')); //false
console.log(letterCompare('mapping', 'map')); //false
console.log(letterCompare('mapping', 'maind')); //false
console.log(letterCompare([1, 2, 3], [1, 3, 2])); //true
console.log(letterCompare([1, 2, 3, 4], [1, 3, 2, 5])); //false
console.log(letterCompare(new Set().add(1).add(2).add(4), new Set().add(4).add(1).add(2))); //true
