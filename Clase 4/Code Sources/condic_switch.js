const precioPublico = 70;
const edadCliente = 25;
var clienteDescuento = true;

switch (clienteDescuento) {
  case true:
    console.log("El cliente tiene descuento. Precio final: $" + (precioPublico * 0.8));
    break;
  case false:
    console.log("El cliente no tiene descuento. Precio final: $" + precioPublico);
    break;
  default:
    console.log("Estado de descuento desconocido.");
}
/** * Si clienteDescuento es true, se aplica un 20% de descuento (puedes cambiar ese porcentaje).
 * Si no, se cobra el precio completo.     */                                                                 