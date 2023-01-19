import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  border-bottom: 1px solid orange;
`;
const Logo = styled.img`
  margin: 5px 20px;
  width: 50px;
  height: 50px;
`;

const Tabs = styled.div`
  color: orange;
  display: flex;
  align-items: center;
  margin-right: 30px;
`;
const Tab = styled.div`
  padding: 10px;
  cursor: pointer;
  color: orange;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <NavBar>
      <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMWrLRqXb9b8R0WzG9xqAarxR7i10sAwPSw&usqp=CAU" />
      <Tabs>
        <Tab as={Link} to="/">
          Pets
        </Tab>
        <Tab as={Link} to="/meds">
          Medication
        </Tab>
      </Tabs>
    </NavBar>
  );
};

export default Navbar;
