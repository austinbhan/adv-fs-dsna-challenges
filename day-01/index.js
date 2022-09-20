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



module.exports = { reverseSentence, titleCase, oddEven, multiples, addPunctuation, addFirst };
