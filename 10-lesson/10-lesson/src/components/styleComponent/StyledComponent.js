import styled from "styled-components";
import CustomButton from "../customButton/CustomButton";
import { Link } from "react-router-dom";
import CustomInput from "../customInput/CustomInput";

const StyledButton = styled.div`
  padding: 10px;
  background-color: red;
  width: 150px;
  margin: 30px;
`;
const Text = styled.p`
  color: green;
`;

const RedButton = styled(CustomButton)`
  color: tomato;
  border-color: tomato;
`;

const StyledComponent = () => {
  const props = { size: "lg", inputColor: "rebeccapurple" };
  return (
    <div>
      <StyledButton>
        <Text>Styled component</Text>
      </StyledButton>
      <CustomButton as={Link} to="/">
        Nauja Knopke
      </CustomButton>
      <RedButton
        as="a"
        href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d">
        Patobulinta Knopke
      </RedButton>
      <CustomInput defaultValue="Custom input component" />
      <CustomInput
        defaultValue="Custom input component"
        inputColor={props.inputColor}
      />
      <CustomInput defaultValue="Props past" size={props.size} />
    </div>
  );
};

export default StyledComponent;
