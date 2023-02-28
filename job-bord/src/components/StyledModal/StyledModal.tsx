import styled from "styled-components";
import Modal from "react-modal";
import { PropsWithChildren, useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import {
  borderRadius,
  mainBgColor,
  mediumGrey,
} from "../../const/styles";



const StyledModal = ({children}:PropsWithChildren) => {
  const { modalIsOpen, closeModal } = useContext(ModalContext);

  return (
    <Container isOpen={modalIsOpen} onRequestClose={closeModal}>
      {children}
    </Container>
  );
};

export default StyledModal;

const Container = styled(Modal)`
  min-height: 18rem;
  background-color: ${mainBgColor};
  color: ${mediumGrey};
  margin: 50px 15vw;
  border-radius: ${borderRadius};
  padding: 24px 10vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0.25rem;
`;

