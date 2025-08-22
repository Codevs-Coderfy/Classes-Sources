// 1. Pedimos al usuario que ingrese una distancia en kilómetros
let kmInput = prompt("Ingresa una distancia en kilómetros:");

// 2. Convertimos la entrada (que llega como texto) a número
let km = parseFloat(kmInput);

// 3. Verificamos que la entrada sea un número válido
if (isNaN(km)) {
    // El método global isNaN() en JavaScript evalúa si un valor es NaN ("Not-a-Number"). 
    // Pero antes de comprobarlo, intenta convertir el valor a número mediante coerción.
    // Solo si, tras esa conversión, el valor resulta en NaN, la función devuelve true; 
    // de lo contrario, false
  alert("Por favor, ingresa un número válido en kilómetros.");
} else {
  // 4. Aplicamos la conversión: 1 km ≈ 0.621371 millas
  const factor = 0.621371;
  let miles = km * factor;

  // 5. Mostramos el resultado con solo 2 decimales
  alert(`${km} km equivalen aproximadamente a ${miles.toFixed(2)} millas.`);
}
