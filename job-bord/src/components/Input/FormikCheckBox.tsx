import { placeholder } from "@babel/types";
import { Field, ErrorMessage } from "formik";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { darkGrey, lightGrey, mainBgColor, smallBorderRadius } from "../../const/styles";

type Props = {
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder'];
  title: string;

};

const FormikCheckBox = ({name, title, ...restProps}: Props) => {
  return (
    <div>
      <span>{title}</span>
      <label>
              <Field type="checkbox" id='false' name="checked" value="false"/>
              False
            </label>
            <label>
              <Field type="checkbox" id='true' name="checked" value="true" />
              True
            </label>
    </div>
  )
}

export default FormikCheckBox
