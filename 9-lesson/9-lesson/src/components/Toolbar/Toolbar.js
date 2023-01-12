import { useNavigate } from "react-router-dom";
import React from "react";

const Toolbar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        backgroundColor: "olive",
      }}>
      <h2>My logo</h2>

      <nav style={{ display: "flex", gap: "30px" }}>
        <span onClick={() => navigate("/")}>Home</span>

        <span onClick={() => navigate("/contacts")}>Kontaktai</span>
      </nav>
    </div>
  );
};

export default Toolbar;
