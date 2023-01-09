import React from "react";
import "./Button.css";

// receive "variant" as a prop +
// handle 3 variants: "text" || "contained" || "outlined" +
// all text is uppercased +
// get hex of blue color +
// style every button to match design +

const Button = ({ variant, children }) => {
  if (variant === "text") {
    return <button className="button text">{children}</button>;
  } else if (variant === "outlined") {
    return <button className="button outlined">{children}</button>;
  } else {
    return <button className="button contained">{children}</button>;
  }
};

export default Button;
