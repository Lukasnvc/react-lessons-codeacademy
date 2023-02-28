import { createContext, PropsWithChildren, useState } from "react";

const ModalContext = createContext<{
  modalIsOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}>({
  modalIsOpen: false,
  closeModal: () => { },
  openModal: () => { }
});

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{ modalIsOpen, closeModal, openModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
