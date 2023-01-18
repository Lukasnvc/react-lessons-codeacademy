import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: aliceblue;
`;
const Tab = styled.div`
  font-size: 1.5rem;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
const Logo = styled.h1`
  font-style: italic;
  font-size: 1.2rem;
  color: bisque;
  margin: 10px;
`;

const Tabs = styled(NavContainer)`
  background-color: none;
  justify-content: center;
`;

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <Logo>Luko</Logo>
        <Tabs>
          <Tab as={Link} to="/">
            Main
          </Tab>
          <Tab as={Link} to="/about">
            About
          </Tab>
        </Tabs>
      </NavContainer>
    </>
  );
};

export default NavBar;
