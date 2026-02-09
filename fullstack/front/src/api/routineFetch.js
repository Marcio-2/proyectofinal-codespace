export const getAllRoutines = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found. User not logged in.");
  }

  const response = await fetch("http://localhost:9000/routines", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("Backend returned non-JSON response");
  }
  if (!response.ok) {
    throw new Error(data.error || "Failed to fetch routines");
  }
  return data;
};

export const saveRoutine = async (routine) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return {
      ok: false,
      error: "Session expired. Please log in again.",
    };
  }

  const response = await fetch("http://localhost:9000/routines", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(routine),
  });

  let data;
  try {
    data = await response.json();
  } catch {
    return { ok: false, error: "Backend returned non-JSON response" };
  }

  if (!response.ok) {
    return {
      ok: false,
      error:
        data.message ||
        data.error ||
        "Failed to save routine",
    };
  }

  return { ok: true, data };
};

export const updateRoutine = async (routine) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return { ok: false, error: "Session expired. Please log in again." };
  }

  const response = await fetch(
    `http://localhost:9000/routines/${routine.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(routine),
    }
  );

  let data;
  try {
    data = await response.json();
  } catch {
    return { ok: false, error: "Backend returned non-JSON response" };
  }

  if (!response.ok) {
    return {
      ok: false,
      error:
        data.message ||
        data.error ||
        "Failed to update routine",
    };
  }

  return { ok: true, data };
};


export const deleteRoutine = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found. User not logged in.");
  }

  const response = await fetch(`http://localhost:9000/routines/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
  });

  let data;
  try {
    data = await response.json();
  } catch {
    data = {};
  }
  if (!response.ok) {
    throw new Error(data.error || "Failed to delete routine");
  }
  return data;
};



