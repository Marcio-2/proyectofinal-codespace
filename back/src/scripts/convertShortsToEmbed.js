const fs = require("fs");
const path = require("path");

const exercisesPath = path.join(__dirname, "../mocks/exercisesDB.js");

let exercisesDB = require(exercisesPath);

// Convierte shorts a embed
const shortsToEmbed = (url) => {
  if (!url) return "";
  const shortMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) {
    const videoId = shortMatch[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
  }
  return url; 
};

const updatedExercises = exercisesDB.map((ex) => ({
  ...ex,
  videoUrl: shortsToEmbed(ex.videoUrl),
}));

const fileContent = `let exercisesDB = ${JSON.stringify(updatedExercises, null, 2)};\nmodule.exports = exercisesDB;`;

fs.writeFileSync(exercisesPath, fileContent, "utf-8");

