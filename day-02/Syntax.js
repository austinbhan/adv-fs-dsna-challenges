const { Stack } = require('./Stack.js');

function reverse(arr) {
  const newStack = new Stack(arr);
  const reversed = []; 
  
  while (newStack.list.length) {
    reversed.push(newStack.pop());
  } 
  return reversed;
}

module.exports = { reverse };

