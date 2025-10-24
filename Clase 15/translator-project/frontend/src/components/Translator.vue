<template>
  <div class="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 w-[420px] transition-all duration-500 hover:shadow-indigo-200">
    <h2 class="text-2xl font-extrabold mb-6 text-center text-indigo-600">🌍 Traductor Inteligente</h2>
    
    <div class="space-y-4">
      <textarea
        v-model="text"
        class="w-full border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 rounded-xl p-3 resize-none h-32 text-gray-700 placeholder-gray-400 transition-all"
        placeholder="Escribe texto aquí..."
      ></textarea>

      <select
        v-model="target"
        class="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-indigo-200 text-gray-700"
      >
        <option disabled value="">Selecciona idioma destino</option>
        <option value="en">Inglés</option>
        <option value="es">Español</option>
        <option value="fr">Francés</option>
        <option value="de">Alemán</option>
        <option value="it">Italiano</option>
        <option value="pt">Portugués</option>
      </select>

      <button
        @click="translateText"
        class="w-full bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white font-semibold py-2 rounded-xl shadow-md transition-all"
      >
        Traducir
      </button>
    </div>

    <transition name="fade">
      <div v-if="translatedText" class="mt-6 p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
        <strong class="text-indigo-600">Traducción:</strong>
        <p class="mt-2 text-gray-800 leading-relaxed">{{ translatedText }}</p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const text = ref("");
const target = ref("en");
const translatedText = ref("");

const translateText = async () => {
  if (!text.value.trim()) return;
  try {
    const res = await axios.post("http://localhost:3000/api/translate", {
      text: text.value,
      target: target.value
    });
    translatedText.value = res.data.translatedText;
  } catch (err) {
    console.error(err);
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
