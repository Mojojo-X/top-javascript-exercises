const sumAll = function (start, end) {
  if (
    !Number.isInteger(start) ||
    !Number.isInteger(end) ||
    start < 0 ||
    end < 0
  ) {
    return "ERROR";
  }

  sum = 0;
  if (start > end) {
    for (let i = start; i >= end; i--) {
      sum += i;
    }
    return sum;
  } else {
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    if (sum === 0) return "ERROR";
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
