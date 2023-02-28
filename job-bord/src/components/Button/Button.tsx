import styled from "styled-components";
import {
  lighterBlue,
  lightGrey,
  mediumBlue,
  mediumGrey,
} from "../../const/styles";

interface ButtonProps {
  onClick: () => void;
  title: string;
  type?: "button" | "submit" | "reset";
  greyVariant?: boolean;
}

const Button = ({
  onClick,
  title,
  type = "button",
  greyVariant = false,
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} type={type} greyVariant={greyVariant}>
      {title}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ greyVariant: boolean }>`
  cursor: pointer;
  background-color: ${({ greyVariant }) =>
    greyVariant ? lightGrey : lighterBlue};
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 7px 23px;
  margin: 10px 5px;
  border: none;
  border-radius: 25px;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${({ greyVariant }) =>
      greyVariant ? mediumGrey : mediumBlue};
  }
`;
