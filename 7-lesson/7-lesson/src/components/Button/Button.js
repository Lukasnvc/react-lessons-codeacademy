import React from "react";
import "./Button.css";

const Button = ({ children }) => {
  return (
    <div>
      <button>{children.toUpperCase()}</button>
    </div>
  );
};

export default Button;
