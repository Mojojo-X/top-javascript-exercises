const add = function(...args) {
  let sum = 0;
  for (let num of args) {
    sum += num
  }
  return sum
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(...args) {
  let sum = 0;
  for (let num of args.flat()) {
    sum += num
  }
  return sum;
};

const multiply = function(...args) {
  return args.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
};

const power = function(a, p) {
	return a ** p;
};

const factorial = function(num) {
	let result = 1;
  for (let i = num; i>0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
