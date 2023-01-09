import React from "react";

const Greeting = ({ isLoggedIn }) => {
  return <p>{isLoggedIn ? "Hello user!" : "You need to login"}</p>;
};

export default Greeting;
