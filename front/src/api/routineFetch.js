export const saveRoutine = async (routine) => {
  const response = await fetch("http://localhost:9000/routines", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(routine)
  });

  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("Backend returned non-JSON response");
  }
  if (!response.ok) {
    throw new Error(data.message || "Failed to save routine");
  }
  return data;
};

export const getAllRoutines = async () => {
  const res = await fetch("http://localhost:9000/routines");
  if (!res.ok) throw new Error("Error fetching routines");
  return res.json();
};


export const deleteRoutine = async (id) => {
  const res = await fetch(`http://localhost:9000/routines/${id}`, {
    method: "DELETE"
  });
  if (!res.ok) throw new Error("Failed to delete routine");
  return res.json(); 
};