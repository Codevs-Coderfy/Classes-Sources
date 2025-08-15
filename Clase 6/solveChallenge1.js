 function verificarNumero() {
      // Tomar el valor del input
      let valor = document.getElementById("numero").value;

      // Convertirlo a entero con parseInt
      let numero = parseInt(valor);

      // Validar que sea un número
      if (isNaN(numero)) {
        document.getElementById("resultado").textContent = "Por favor introduce un número válido.";
        return;
      }

      // Determinar si es par o impar
      let tipo = (numero % 2 === 0) ? "par" : "impar";

      // Determinar si es positivo, negativo o cero
      let signo;
      if (numero > 0) {
        signo = "positivo";
      } else if (numero < 0) {
        signo = "negativo";
      } else {
        signo = "es cero";
      }

      // Mostrar el resultado
      document.getElementById("resultado").textContent = `${numero} es ${tipo} y ${signo}`;
    }