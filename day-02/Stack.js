class Stack {
  list = [];

  constructor(arr) {
    if (arr) {
      this.list = arr;
    }
  }

  push(item) {
    this.list.push(item);
    return this.list;
  }

  pop() {
    return this.list.pop();
  }

  peek() {
    return this.list.at(-1);
  }
}

module.exports = { Stack };
