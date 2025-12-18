import React from "react";

export default function BackButton({ onClick }) {
  return (
    <button onClick={onClick} style={{ marginTop: "15px" }}>
      Back
    </button>
  );
}
