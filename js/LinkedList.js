'use strict';

class LinkedListIterator {
  constructor(list) {
    this.list = list;
    this.currentItem = null;
  }
  next() {
    this.currentItem = this.currentItem
      ? this.currentItem.next
      : this.list.head;
    return {
      value: this.currentItem ? this.currentItem.value : undefined,
      done: !this.currentItem,
    };
  }
}
class LinkItem {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
}

class LinkedList {
  constructor(...args) {
    this.length = 0;
    this.head = null;
    this.tail = null;
    for (const argument of args) {
      this.push(argument);
    }
  }
  push(argument) {
    const newItem = new ListItem(argument);
    if (this.length === 0) {
      this.head = newItem;
      this.tail = newItem;
    } else {
      this.tail.next = newItem;
      newItem.prev = this.tail;
      this.tail = newItem;
    }
    return ++this.length;
  }
  [Symbol.iterator]() {
    return new LinkedListIterator(this);
  }
}
