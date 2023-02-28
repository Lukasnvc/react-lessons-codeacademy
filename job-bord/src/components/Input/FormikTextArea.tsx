import { Field, ErrorMessage } from "formik";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { darkGrey, lightGrey, mainBgColor, smallBorderRadius } from "../../const/styles";

type Props = {
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder'];
};

const FormikTextArea = ({name, ...restProps}: Props) => {
  return (
    <div>
      <Field name={name} as={StyledArea} {...restProps} />
      <ErrorMessage name={name} component='div'/>
    </div>
  )
}

export default FormikTextArea

const StyledArea = styled.textarea`
  font-size: 16px;
  border-radius: ${smallBorderRadius};
  color: ${darkGrey};
  background-color: ${mainBgColor};
  border: 1px solid ${lightGrey};
  padding: 10px 14px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
`

