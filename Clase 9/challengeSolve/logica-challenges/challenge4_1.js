// Pedimos un número al usuario
let numero = parseInt(prompt("Ingresa un número:"));

// Bucle que imprime la tabla de multiplicar
for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}

