const add = function(...arr) {
  // total = 0;
  // for (const num of nums)
  //   total += num;

  // return total;
  return arr.reduce((sum, current) => sum + current, 0);
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
  if (number <= 1)
    return 1;
  else
    return number * factorial(number -1);
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
