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

// Take a Number
function multiples(n) {
  const multiples = [];
  for (let i = 1; i <= 50; i++) {
    if (n * i <= 50) {
      multiples.push(n * i);
    }
  }
  return multiples;
  // Multiply by 1, then 2, etc 
  // Add to output array
  // If multiple <= 50, stop loop
}



module.exports = { reverseSentence, titleCase, oddEven, multiples };
