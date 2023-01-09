import "./App.css";
// import Button from "./components/Button/Button";
// import { useState } from "react";
// import Greeting from "./components/Greeting/Greeting";
// import Hero from "./components/Hero/Hero";
// import Cards from "./components/Cards/Cards";
// import MainText from "./components/MainText/MainText";
import MenuList from "./components/MenuList/MenuList";
import Avatar from "./components/Avatar/Avatar";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [count, setCount] = useState(0);
  // const handleAddCount = () => {
  //   setCount(count + 1);
  // };
  // const fruits = ["banana", "apple", "pear"];

  // const buttons = [
  //   {
  //     variant: "text",
  //     text: "help me get random number",
  //   },
  //   {
  //     variant: "outlined",
  //     text: "I am an outcast",
  //   },
  //   {
  //     variant: "contained",
  //     text: "contained button",
  //   },
  // ];

  return (
    <div className="App">
      {/* <Button variant="contained">contained</Button>
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
      ))} */}
      {/* 
      <Hero title="Title" txt1="Some about text" txt2="in two lines">
        <Button color="teal">Button</Button>
      </Hero>
      <MainText
        mainTitle="Portfolio"
        txt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
      />
      <Cards /> */}

      <MenuList customerType="couple" />
      <Avatar color="grey">H</Avatar>
      <Avatar color="orange">N</Avatar>
      <Avatar color="purple">OP</Avatar>
    </div>
  );
}

export default App;
