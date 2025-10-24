import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Ruta para traducir texto
app.post("/api/translate", async (req, res) => {
  const { text, target } = req.body;

  try {
    const response = await axios.get("https://translate.googleapis.com/translate_a/single", {
      params: {
        client: "gtx",
        sl: "auto",      // Detecta idioma automáticamente
        tl: target,      // Idioma destino
        dt: "t",
        q: text
      }
    });

    const translatedText = response.data[0][0][0];
    res.json({ translatedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al traducir texto" });
  }
});

app.listen(3000, () => console.log("Backend corriendo en http://localhost:3000"));
