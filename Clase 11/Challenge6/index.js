// 1. Definir las variables
let subtotal = 50;           // Puedes cambiar este valor
let porcentajePropina = 15;  // Porcentaje de propina (%)

// 2. Calcular la propina
const propina = subtotal * (porcentajePropina / 100);

// 3. Calcular el total de la cuenta
const total = subtotal + propina;

// 4. Imprimir los resultados en la consola
console.log("--- Resumen de la cuenta ---");
console.log("Subtotal: $" + subtotal);
console.log("Porcentaje de propina: " + porcentajePropina + "%");
console.log("Propina: $" + propina.toFixed(2)); // Limita a 2 decimales
console.log("---------------------------");
console.log("Total a pagar: $" + total.toFixed(2));
