const convertToCelsius = function(temp) {
  return nearestTenth((temp - 32) * (5/9));
};

const convertToFahrenheit = function(temp) {
  return nearestTenth(temp * (9/5) + 32);
};

function nearestTenth(number) {
  return Math.round(number * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
