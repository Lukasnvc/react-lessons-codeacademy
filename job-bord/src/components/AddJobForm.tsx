import { JobType, NewJob } from "../types/job";
import { requiredField } from "../const/validations";
import * as Yup from "yup";
import Button from "../components/Button/Button";
import Emoji from "../components/Emoji/Emoji";
import FormikInput from "../components/Input/FormikInput";
import FormikSelect from "../components/Input/FormikSelect";
import FormikDatePicker from "../components/Formik/FormikDatePicker";
import { useCreateJob } from "../hooks/jobsHooks";
import FormikTextArea from "../components/Input/FormikTextArea";
import { Formik, Form } from "formik";
import { darkGrey } from "../const/styles";
import styled from "styled-components";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { toast } from 'react-hot-toast';
import FormikCheckBox from "./Input/FormikCheckBox";

const initialValue: NewJob = {
  title: "",
  price: "",
  type: "fullTime",
  starting_from: "",
  has_drivers_license: false,
  user_id: 4,
  description: "",
};

const validationSchema: Yup.ObjectSchema<NewJob> = Yup.object().shape({
  title: Yup.string().required(requiredField),
  price: Yup.number().required(requiredField),
  description: Yup.string().required(requiredField),
  type: Yup.mixed<JobType>().oneOf(["fullTime", "partTime", "freelance"]).required(requiredField),
  starting_from: Yup.string().required(requiredField),
  has_drivers_license: Yup.boolean().required(requiredField),
  user_id: Yup.number().required(),
});

const AddJobForm = () => {
  const { mutateAsync: createJob } = useCreateJob();
  const { closeModal } = useContext(ModalContext);

  const handleSubmit = (values: NewJob) => {
    console.log(values);
    createJob(values)
      .then((response) => {
        closeModal();
      })
      .catch((error) => {
        console.error("Failed to post the ad");
      });
  };
  const toasterSubmit = () => {
      toast.success(`Job added 👏 !`)
    }
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ submitForm }) => (
        <StyledForm>
          <Title>
            Create a job ad <Emoji symbol="✍" />
          </Title>
          <InputRow>
            <InputRowItem>
              <FormikInput type="text" name="title" placeholder="Job title" />
            </InputRowItem>
            <InputRowItem>
              <FormikInput type="number" name="price" placeholder="Pay offered" />
            </InputRowItem>
          </InputRow>
          <FormikSelect
            name="type"
            options={[
              { value: "fullTime", label: "Full Time" },
              { value: "partTime", label: "Part Time" },
              { value: "freelance", label: "Freelance" },
            ]}
          />
          <FormikTextArea name="description" placeholder="Job description" />
          <FormikCheckBox name='has_drivers_license' title="Has drivers licenses"/>
          <FormikDatePicker name="starting_from" />
          <ButtonsContainer>
            <Button greyVariant={true} onClick={closeModal} title="close" />
            <Button title="save" type="submit" onClick={()=> toasterSubmit()} />
          </ButtonsContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

export default AddJobForm;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 32px;
  color: ${darkGrey};
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  padding: 32px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 8px;
`;

const InputRowItem = styled.div`
  flex: 1;
`;
