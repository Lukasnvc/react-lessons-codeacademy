import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { DonateContext } from "../contexts/DonateContext";
import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styled from "styled-components";
import { HeaderContext } from "../contexts/HeaderContext";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { donate, toggleDonate } = useContext(DonateContext);
  const { show, toggleShow } = useContext(HeaderContext);
  return (
    <NavContained>
      <Container>
        <ModeContainer>
          {" "}
          Mode :{darkMode ? <FaMoon /> : <FaSun color="orange" />}
        </ModeContainer>

        <Switch onClick={toggleDarkMode}>activate</Switch>
      </Container>

      {show && <h1>Thanks for your donation</h1>}
      <Switch onClick={toggleDonate}>Donate</Switch>
      <NavContained>
        <StyledLink to={"/"}>Home</StyledLink>
        <StyledLink to={"/contacts"}>Contacts</StyledLink>
      </NavContained>
    </NavContained>
  );
};

export default Nav;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(NavLink)`
  padding: 2px 5px;
  margin: 5px;
  color: white;
  background-color: blueviolet;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
`;

const NavContained = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
  svg {
    margin-left: 10px;
    font-size: 3rem;
  }
`;

const ModeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Switch = styled.button`
  font-size: 1rem;
  padding: 10px 40px;
  color: white;
  background-color: blueviolet;
  border: none;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  :hover {
    background-color: yellowgreen;
  }
`;
