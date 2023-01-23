import styled from "styled-components";

export const Button = styled.button`
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
  font-size: 0.6rem;
  padding: 10px 20px;
  margin: 10px;
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.background || "orange"};
  border: 1px solid orange;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
`;
