// Pedimos un número al usuario
let numero = parseInt(prompt("Ingresa un número:"));

// Bucle con condición para resaltar si es mayor a 50
for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;

  if (resultado > 50) {
    console.log(`${numero} x ${i} = ${resultado} → resultado mayor a 50`);
  } else {
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}
