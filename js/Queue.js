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
  while (q1.size || q2.size) {
    if (q1.size) q3.enQueue(q1.deQueue());
    if (q2.size) q3.enQueue(q2.deQueue());
  }
  return q3;
};

const queue1 = new Queue(11, 12, 13, 14, 15);
const queue2 = new Queue(21, 22, 23, 24, 25, 26, 27, 28);

console.log(mergeQueues(queue1, queue2));
