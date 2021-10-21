class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;
    for (const argument of args) {
      this.enQueue(argument);
    }
  }
  get size() {
    return this._tail - this._head;
  }
  enQueue(value) {
    this[this._tail++] = value;
    return this.size;
  }
  deQueue() {
    if (this.size) {
      const deItem = this[this._head];
      delete this[this._head++];
      return deItem;
    }
  }
}

const mergeQueues = (q1, q2) => {
  const q3 = new Queue();
  
  return q3;
};
