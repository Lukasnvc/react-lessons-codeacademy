import React from "react";
import styled from "styled-components";

const FormBtn = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 7px;
  cursor: pointer;
  background-color: ${(props) => props.background || "white"};
  border: 2px solid grey;
  font-weight: 600;
  color: ${(props) => props.color || "grey"};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  margin: 15px;
  transition: 300ms;
  :hover {
    border: 2px solid yellowgreen;
  }
`;

export default FormBtn;
