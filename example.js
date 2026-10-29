// Пример вызова библиотеки: node example.js
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./temp-convert.js');

console.log('100 °C =', celsiusToFahrenheit(100), '°F');
console.log('32 °F =', fahrenheitToCelsius(32), '°C');
