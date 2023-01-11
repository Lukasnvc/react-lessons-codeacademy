import React from "react";
import { useState } from "react";

const Mood = () => {
  const [message, setMessage] = useState("Kaip jauciates?");
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => setMessage("Nieko tokio, viskas bus gerai")}>
        Jauciuosi prastai
      </button>
      <button onClick={() => setMessage("Nieko tokio, buna blogiau")}>
        Jauciuosi normaliai
      </button>
      <button onClick={() => setMessage("Nuostabu")}>Jauciuosi puikiai</button>
    </div>
  );
};

export default Mood;
