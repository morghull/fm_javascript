class Stack {
  constructor(maxSize = 5, ...args) {
    this._maxSize = maxSize;
    this._size = 0;
    for (const argument of args) {
      this.push(argument);
    }
  }
  get size() {
    return this._size;
  }
  get isEmpty() {
    return this._size === 0;
  }
  push(argument) {
    if (this._size >= this._maxSize) {
      throw new RangeError('Stack overflow!');
    }
    this[`_${this._size}`] = argument;
    return ++this._size;
  }
  pick() {
    return this[`_${this._size - 1}`];
  }
  pop() {
    if (this.isEmpty) return;
    const lastItem = this[`_${this._size - 1}`];
    delete this[`_${this._size - 1}`];
    this._size--;
    return lastItem;
  }
}

const stack1 = new Stack(3, 77, 78, 79);

const checkSequence = (str) => {
  const stack = new Stack(str.length);
  const openQuotes = ['(', '{', '['];
  const quotesPair = { '(': ')', '{': '}', '[': ']' };
  for (const char of str) {
    if (openQuotes.includes(char)) stack.push(char);
    else if (quotesPair[`${stack.pick()}`] === char) stack.pop();
    else return false;
  }
  return stack.isEmpty;
};
console.log(checkSequence('{((()))}'));
