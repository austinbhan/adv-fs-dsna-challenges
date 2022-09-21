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

  pop(item) {
    this.list.pop(item);
    return this.list;
  }

  peek() {
    return this.list.at(-1);
  }
}

module.exports = { Stack };
