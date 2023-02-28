import Flatpickr from "react-flatpickr";
import { useField, ErrorMessage } from "formik";


interface Props {
  name: string;
}

const FormikDatePicker = ({ name }: Props) => {
  const [field, , helpers] = useField(name);

  return (

  <>
    <Flatpickr name={name} value={field.value} onChange={([date]) => helpers.setValue(date.toISOString())} placeholder='Select the date'/>
      <ErrorMessage name={name} component='div' />
      </>
  )
}

export default FormikDatePicker