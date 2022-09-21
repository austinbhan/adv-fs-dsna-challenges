class Queue {
  list = [];

  constructor(arr) {
    if (arr) {
      this.list = arr;
    }
  }

  enqueue(item) {
    this.list.push(item);
  }
  dequeue() {
    this.list.shift();
  }
  hasNext() {
    if (this.list.length >= 1) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { Queue };
