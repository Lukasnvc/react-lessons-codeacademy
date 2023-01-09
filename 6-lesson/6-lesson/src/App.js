import "./App.css";
import Button from "./components/Button/Button";
import { useState } from "react";
import Greeting from "./components/Greeting/Greeting";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [count, setCount] = useState(0);
  const handleAddCount = () => {
    setCount(count + 1);
  };
  const fruits = ["banana", "apple", "pear"];

  const buttons = [
    {
      variant: "text",
      text: "help me get random number",
    },
    {
      variant: "outlined",
      text: "I am an outcast",
    },
    {
      variant: "contained",
      text: "contained button",
    },
  ];

  return (
    <div className="App">
      <Button variant="contained">contained</Button>
      <Button variant="text">text</Button>
      <Button variant="outlined">outlined</Button>
      <br />
      <button onClick={handleAddCount}>Plus one</button>
      <span style={{ fontSize: 20, color: "blue", margin: "0 10px" }}>
        {count}
      </span>
      <button onClick={() => setCount(count - 1)}>Minus one</button>
      <span>{count > 10 && "per daug"}</span>

      <Greeting isLoggedIn={isLoggedIn} />

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log in</button>
      )}
      <br />
      {["Zalia", "Geltona", "Raudona"].map((text) => (
        <Button key={text}>{text}</Button>
      ))}
      <br />
      <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <br />
      {buttons.map((button, index) => (
        <Button key={index} variant={button.variant}>
          {button.text}
        </Button>
      ))}
    </div>
  );
}

export default App;
