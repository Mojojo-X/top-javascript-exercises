const palindromes = function (str) {
  const original = str.match(/\w/g);
  const reverse = original.slice().reverse();
  return original.join('').toLowerCase() === reverse.join('').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
