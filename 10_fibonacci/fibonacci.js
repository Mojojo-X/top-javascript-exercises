const fibonacci = function(num) {
  if (num < 0) return "OOPS";
  const start = [1,1]
  for (let i = 2; i < num; i++) {
    start.push(start.at(-1) + start.at(-2));
  }
  return start.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
