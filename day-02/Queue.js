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
}

module.exports = { Queue };
