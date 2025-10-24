// Importar librerías
const express = require("express");
const axios = require("axios");

// Crear aplicación Express
const app = express();
const PORT = 3000;

// Ruta de inicio
app.get("/", (req, res) => {
  res.json({ mensaje: "Bienvenido al proyecto de consumo de APIs con Node.js y Express" });
});

// Ruta para consumir una API pública
app.get("/usuarios", async (req, res) => {
  try {
    // Consumir la API externa
    const respuesta = await axios.get("https://jsonplaceholder.typicode.com/users");




    // Procesar datos: solo nombre y correo
    const datos = respuesta.data.map(usuario => ({
      nombre: usuario.name,
      correo: usuario.email
    }));

    // Enviar respuesta al cliente
    res.json(datos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los datos de la API" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});


