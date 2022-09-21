const { Stack } = require('../Stack.js');

describe('Stack Test', () => {
  it('Push at item to array', () => {
    const testArray = new Stack([1, 2, 3, 4]);
    testArray.push(5);
    expect(testArray.list).toEqual([1, 2, 3, 4, 5]);
  });  
  it('Pop an item from an array', () => {
    const testArray = new Stack([1, 2, 3, 4]);
    testArray.pop();
    expect(testArray.list).toEqual([1, 2, 3]);
  });
  it('Peek an item from an array', () => {
    const testArray = new Stack([1, 2, 3, 4, 5]);
    testArray.peek();
    expect(testArray.peek()).toEqual(5);
  });
});
