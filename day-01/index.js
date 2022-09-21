function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function titleCase(str) {
  return str.split(' ')
    .map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    }).join(' ');
}

function oddEven(str) {
  const string = Array.from(String(str), Number);
  
  const initial = 0;
  const sum = string.reduce(
    (prev, curr) => prev + curr,
    initial
  );
    
  if (sum % 2 === 0) {
    return 'Evenish';
  } else {
    return 'Oddish';
  }
}

function multiples(n) {
  const multiples = [];
  for (let i = 1; i <= 50; i++) {
    if (n * i <= 50) {
      multiples.push(n * i);
    }
  }
  return multiples;
}

function addPunctuation (str) {
  return function addSomething(string) {
    return string + str;
  };
}

function addFirst (str) {
  const newArr = [];
  return function addToArr (arr) {
    newArr.push(str, ...arr);
    return newArr;
  };
}

function rootDigit(num) {
  const firstNum = num 
    .toString()
    .split('')
    .map((number) => parseInt(number))
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  return firstNum < 10 ? firstNum : rootDigit(firstNum);
}

function arrayValue(str, pos) {
  const arr = str.toString().split('');
  return parseInt(arr[pos]);
}

function anagram(wordOne, wordTwo) {
  const alphaOne = wordOne.split('').sort().join('');
  const alphaTwo = wordTwo.split('').sort().join('');

  if (alphaOne === alphaTwo) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(num) {
  const res = [];

  for (let i = 1; i <= num; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      res.push('FizzBuzz');
    } else if (i % 3 === 0) {
      res.push('Fizz');
    } else if (i % 5 === 0) {
      res.push('Buzz');
    } else res.push(i);
  }
  return res;
}


module.exports = { reverseSentence, titleCase, oddEven, 
  multiples, addPunctuation, addFirst, rootDigit, arrayValue,
  anagram, fizzBuzz };
