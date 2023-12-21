
const convertToCelsius = function(fTemperature) {
  let cTemperature = (fTemperature - 32) * (5/9);
  return Number(cTemperature.toFixed(1));
};

const convertToFahrenheit = function(cTemperature) {
  let fTemperature =  cTemperature * (9/5) + 32;
  return Number(fTemperature.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
