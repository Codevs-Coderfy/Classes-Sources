// Ejemplo de uso
const fahrenheit = 100;


function fahrenheitACelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
const celsius = fahrenheitACelsius(fahrenheit);
console.log(`${fahrenheit}°F es igual a ${celsius.toFixed(2)}°C`);

