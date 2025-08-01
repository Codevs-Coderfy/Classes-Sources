const precioPublico = 70;
const edadCliente = 25;
var clienteDescuento = true;

// Usamos while para repetir el cálculo mientras el cliente tenga descuento
while (clienteDescuento) {
  const precioFinal = precioPublico * 0.8;
  console.log("El cliente tiene descuento. Precio final: $" + precioFinal);
  
  // Rompemos el ciclo para que no sea infinito
  clienteDescuento = false;
}

if (!clienteDescuento) {
  console.log("El cliente ya no tiene descuento. Precio normal: $" + precioPublico);
}
