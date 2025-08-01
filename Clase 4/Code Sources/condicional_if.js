const precioPublico = 70;
const edadCliente = 25;
var clienteDescuento = true;

if (clienteDescuento) {
  console.log("El cliente tiene descuento. Precio final: $" + (precioPublico * 0.8));
} else {
  console.log("El cliente no tiene descuento. Precio final: $" + precioPublico);
}


/**
 * Si clienteDescuento es true, se aplica un 20% de descuento (puedes cambiar ese porcentaje).


Si no, se cobra el precio completo.


 */