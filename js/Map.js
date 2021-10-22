'use strickt';

const obj = {
  prop: 123,
};

const dictionary = new Map();

dictionary.set('собака', 'dog');
dictionary.set('кот', 'cat');
dictionary.set('утка', 'duck');
dictionary.set('брат', 'brother');
dictionary.set('сестра', 'sister');
dictionary.set('дочь', 'daughter');
dictionary.set('небо', 'sky');
dictionary.set('город', 'town');
dictionary.set('дорога', 'road');
dictionary.set('язык', 'language');
dictionary.set('бросать', 'throw');
dictionary.set('брать', 'take');
dictionary.set('смотреть', 'watch');
dictionary.set('говорить', 'talk');

const str = 'Город утка смотреть Дочь привет дорога брать сестра код';

const translate = (dictionary, str, separator = ' ') => {
  return str
    .toLowerCase()
    .split(separator)
    .map((word) =>
      dictionary.has(word) ? dictionary.get(word) : word
    )
    .join(separator);
};

const keysArray = [...dictionary.keys()];

const valuesArray = [...dictionary.values()];

const set1 = new Set();
