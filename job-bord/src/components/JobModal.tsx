import Modal from 'react-modal';
import { useState } from 'react';
import styled from 'styled-components';
import { blue, lightBrown } from '../utils/colors';
import FormikInput from './formik/FormikInput';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'; 


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
  type: Yup.string().required('Required'),
  starting_from: Yup.string().required('Required'),
  has_drivers_license: Yup.boolean().required('Required'),
  use_id: Yup.number().required('Required'),
})

function JobModal() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => { setIsOpen(true); };
  const closeModal = () => { setIsOpen(false); };

  const handleSubmit = (values: any) => {
    console.log(values)
  }
  return (
    <>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <button onClick={closeModal}>close</button>
        <div>
          <Formik initialValues={{
            title: '',
            description: '',
            price: 0,
            type: 'fullTime',
            starting_from: '',
            has_drivers_license: false,
            use_id: 4,
          }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <Form>
            <FormikInput name={"title"} />
            <FormikInput name={"description"} />
            <FormikInput name={"price"} />
            <FormikInput name={"type"}/>
            <FormikInput name={"starting_from"} />
            <FormikInput name={"has_driving_license"} />
              <FormikInput name={"use_id"} />
              <button type='submit'>Submit</button>
            </Form>
          </Formik>
         
        </div>
    </Modal>
      <Button onClick={openModal}>Add new Job</Button>
      </>
  )
}

export default JobModal



const Button = styled.button`
  padding: 10px 20px;
  border: none;
  margin: 20px 40px;
  color: white;
  background-color: ${blue};
  border-radius: 5px;
  cursor: pointer;
  &:active {
    color: ${lightBrown};
    box-shadow: inset 0 0 3px black;
  }
`

