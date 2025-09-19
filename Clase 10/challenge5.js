// Pedir al usuario una frase
let frase = prompt("Ingresa una palabra o frase:");

// Eliminar espacios de la frase
let fraseSinEspacios = frase.replace(/ /g, "");

 // Mostrar en HTML la frase ingresada
        document.write("Su frase fue: <strong>" + frase + "</strong><br>");
        
// Contar los caracteres
let cantidad = fraseSinEspacios.length;

// Mostrar el resultado
console.log("La frase tiene " + cantidad + " caracteres (sin contar espacios).");
// alert("La frase tiene " + cantidad + " caracteres (sin contar espacios).");
//   document.write("La frase tiene " + cantidad + " caracteres (sin contar espacios).");