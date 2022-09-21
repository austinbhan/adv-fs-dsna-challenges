const { Queue } = require('../Queue.js');

describe('Stack Test', () => {
  it('Enqueue should add an item to the queue', () => {
    const myArray = new Queue(['AliG', 'Borat', 'Bruno']);
    myArray.enqueue('Sacha');
    expect(myArray.list).toEqual(['AliG', 'Borat', 'Bruno', 'Sacha']);
  });
  it('Dequeue removes the first in queue', () => {
    const myArray = new Queue(['AliG', 'Borat', 'Bruno']);
    myArray.dequeue();
    expect(myArray.list).toEqual(['Borat', 'Bruno']);
  });
});

