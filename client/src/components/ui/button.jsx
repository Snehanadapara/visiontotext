// Button.jsx
import React from "react";

export const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 rounded ${className}`}
    type="button"
  >
    {children}
  </button>
);
