const convertToCelsius = function(fah) {
  temp = ((fah - 32) * 5/9).toFixed(1);
  return +temp;
};

const convertToFahrenheit = function(cel) {
  temp = (cel * 9/5 + 32).toFixed(1);
  return +temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
