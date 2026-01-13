export function evaluateRoutine(exercises) {
  if (!exercises || exercises.length === 0) return { rating: "bad", score: 0, reasons: ["There are no exercises"] };

  let score = 0;
  let reasons = [];

  // Variedad muscular
  const muscles = new Set(exercises.map(e => e.muscle));
  if (muscles.size <= 1) {
    reasons.push("Little muscle variety");
    score += 1;
  } else if (muscles.size === 3) {
    reasons.push("Medium muscle variety");
    score += 3;
  } else {
    score += 4;
  }

  // Nivel de dificultad
  const levels = exercises.map(e => e.level.toLowerCase());
  const countBeginner = levels.filter(l => l === "beginner" || l === "easy").length;
  const countIntermediate = levels.filter(l => l === "intermediate" || l === "medium").length;
  const countAdvanced = levels.filter(l => l === "advanced").length;
  const total = exercises.length;

  const levelAdvanced = countAdvanced / total;

  if (levelAdvanced >= 0.5) {
    reasons.push("Top, you're going to get strong 💪");
    score += 4; 
  } else if (countBeginner === total) {
    score += 1;
  } else if (countIntermediate === total){
    score += 2;
  }else {
    score += 3;
  }

  // Resultado final
  let rating = "medium";
  if (score <= 4) rating = "bad";
  else if (score <= 7) rating = "medium";
  else rating = "good";

  return { rating, score, reasons };
}
