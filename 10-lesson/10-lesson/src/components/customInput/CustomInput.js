import styled from "styled-components";

const CustomInput = styled.input`
  padding: ${(props) => {
    if (props.size === "sm") return "0.5em";
    if (props.size === "lg") return "1.5em";
    return "3em";
  }};
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background-color: papayawhip;
  border: none;
  border-radius: 3px;
`;

export default CustomInput;
