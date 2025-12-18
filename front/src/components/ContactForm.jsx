import React from "react";
import BackButton from "./BackButton";

export default function ContactForm({ onBack }) {
  return (
    <div>
      <h3>Contact Form</h3>
      <p>This is a placeholder contact form.</p>
      <BackButton onClick={onBack} />
    </div>
  );
}
