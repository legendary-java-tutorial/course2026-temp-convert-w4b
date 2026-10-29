// Перевод температур между шкалами Цельсия и Фаренгейта.

function celsiusToFahrenheit(c) {
  return c * 9 / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

module.exports = { celsiusToFahrenheit, fahrenheitToCelsius };
