import styled from "styled-components";
import { DonateContext } from "../contexts/DonateContext";
import { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderContext";

const Modal = () => {
  const { donate, toggleDonate } = useContext(DonateContext);
  const {show, toggleShow} =useContext(HeaderContext)
  if(!donate) return null
  return (
    <Overlay onClick={toggleDonate}>
      <ModalContiner onClick={(e) => {
        e.stopPropagation()
      }}>
        <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg" alt="nft" />
        <ModalRight>
          <Close onClick={toggleDonate}>x</Close>
          <Content>
            <h1>Donate $20</h1>
            <p>Thank you</p>
            <DonateBtn onClick={toggleShow}>Donate</DonateBtn>
          </Content>
          
        </ModalRight>
      </ModalContiner>
    </Overlay>
  );
}

export default Modal;

const Close = styled.button`
  position: fixed;
  top: 8px;
  right: 8px;
`

const Overlay = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  width: 100%;
  height: 100%;
`
const ModalContiner = styled.div`
  max-width: 600px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 0px 18px 0px rgba(0,0,0,0,0.75);
  border-radius: 10px;

  img {
    width: 250px;
    object-fit: cover;
  }
  @media (max-width:500px) {
    flex-direction: column;
    top: 0;
    left: 0;
    transform: none;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
    }
  }
`
const ModalRight = styled.div`
width: 100%;  
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 3rem;
  padding: 1rem 2rem;
  button {
    background-color: blueviolet;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 20px;
  }
`
const DonateBtn = styled.button`
  background-color: blueviolet;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 50px;

`