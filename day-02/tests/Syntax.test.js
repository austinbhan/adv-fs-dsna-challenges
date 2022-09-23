const { reverse } = require('../Syntax.js');

describe('MyDataStructure', () => {
  it('LABELLED SYNTAX BUT INSTEAD, should reverse an array', () => {
    const testArray = [1, 2, 3, 4, 5, 6];
    const reversed = reverse(testArray);
    expect(reversed).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
