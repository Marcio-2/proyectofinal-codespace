import React from "react";

export default function ExerciseListComponent({ exercises, loading, error, handleShowDetail }) {
  if (loading) return <p>Loading exercises...</p>;
  if (error) return <p>{error}</p>;
  if (!exercises || exercises.length === 0) return <p>No exercises found.</p>;

  return (
    <div>
      {exercises.map((exercise) => (
        <div key={exercise.id} style={{ marginBottom: "10px" }}>
          <span>{exercise.id} | </span>
          <span>{exercise.name} | </span>
          <span>
            <button onClick={() => handleShowDetail(exercise)}>Ver Ejercicio</button>
          </span>
        </div>
      ))}
    </div>
  );
}
