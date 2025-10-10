import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('Bienvenido a mi servidor Node.js'));
app.get('/contacto', (req, res) => res.send('Página de contacto'));
app.get('/productos', (req, res) => res.json([{ nombre: 'Laptop', precio: 12000 }]));



//activo en localhost:3000
app.listen(PORT, () => console.log(`Servidor activo en http://localhost:${PORT}`));
