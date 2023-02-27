import { Field, ErrorMessage } from "formik"
import styled from "styled-components"
import { grey } from "../../utils/colors"

function FormikInput({name, ...rest}) {
  return (

    <div>
      <Field as={StyledInput} name={name} {...rest} />
      <ErrorMessage name={name} component='div'/>
    </div>
  )
}

export default FormikInput

const StyledInput = styled.input`
  margin: 10px auto;
  border: none;
  background-color: ${grey};
  padding: 8px;
  outline: none;
`