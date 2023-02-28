import styled from "styled-components";
import {
  darkGrey,
  lightGrey,
  mainBgColor,
  smallBorderRadius,
} from "../../const/styles";

const Input = (props: any) => {
  return <StyledInput {...props} />;
};

export default Input;

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: ${smallBorderRadius};
  color: ${darkGrey};
  background-color: ${mainBgColor};
  border: 1px solid ${lightGrey};
  padding: 10px 14px;
  outline: none;
  width: 100%;
`;
