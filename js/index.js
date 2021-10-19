'use strict';

const mySymbol = Symbol('metka tolko dla usera'); //хранит уникальный идетнтификатор

const obj = {
  login: 'some',
  [mySymbol]: '123' //как уникальное имя свойства
}

const arr = [1, 2, 3, 4, 5];

for (const iterator of arr) {
  console.log(iterator);
}