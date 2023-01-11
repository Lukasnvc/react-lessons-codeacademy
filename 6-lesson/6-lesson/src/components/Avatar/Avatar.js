import React from "react";
import "./Avatar.css";

const Avatar = ({ color, children }) => {
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        padding: "20px",
        width: "fit-content",
        color: "white",
        borderRadius: "100%",
        display: "inline-block",
      }}>
      {children}
    </div>
  );
};

export default Avatar;
