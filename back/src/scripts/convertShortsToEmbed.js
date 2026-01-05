// conversor de shorts videos para que funcione en ExerciseDetails
const fs = require("fs");
const path = require("path");

// Ruta a tu DB de ejercicios
const exercisesPath = path.join(__dirname, "../mocks/exercisesDB.js");

// Cargamos los ejercicios
let exercisesDB = require(exercisesPath);

// Función para convertir shorts a embed
const convertToEmbed = (url) => {
  if (!url) return "";
  // Verifica si es un short de YouTube
  const shortMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) {
    const videoId = shortMatch[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
  }
  return url; 
};

// Actualizamos todos los ejercicios
const updatedExercises = exercisesDB.map((ex) => ({
  ...ex,
  videoUrl: convertToEmbed(ex.videoUrl),
}));

// Guardamos el archivo actualizado
const fileContent = `let exercisesDB = ${JSON.stringify(updatedExercises, null, 2)};\nmodule.exports = exercisesDB;`;

fs.writeFileSync(exercisesPath, fileContent, "utf-8");

console.log("✅ Todas las URLs de YouTube Shorts convertidas a Embed");
