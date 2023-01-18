import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import FormBtn from "../../components/formBtn/FormBtn";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
`;

const PicDiv = styled.div`
  flex: 2;
  border: 1px solid black;
  border-top-left-radius: 15%;
  border-bottom-left-radius: 15%;
  content: url("https://img.freepik.com/free-photo/handsome-black-man-is-engaged-gym_1157-29805.jpg?w=2000");
  position: relative;
`;

const TextDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-size: 0.8rem;
  text-align: center;
  color: grey;
  font-weight: 600;
`;

const Floter = styled(Text)`
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  z-index: 99;
`;

const AboutPage = () => {
  return (
    <>
      <Container>
        <TextDiv>
          <Text>Please enter your details</Text>
          <FormBtn
            contentEditable="true"
            placeholder="Enter your email"></FormBtn>
          <FormBtn color="white" background="black" style={{ border: "none" }}>
            Continue
          </FormBtn>
          <Text style={{ fontSize: "1rem", fontWeight: "600" }}>OR</Text>
          <FormBtn>
            <FcGoogle style={{ marginRight: "10px", fontSize: "1.8rem" }} />
            Continue with Google
          </FormBtn>
          <FormBtn>
            <FaFacebook
              style={{ marginRight: "10px", fontSize: "2rem", color: "blue" }}
            />
            Continue with Facebook
          </FormBtn>
          <FormBtn>
            {" "}
            <FaApple
              style={{ marginRight: "10px", fontSize: "2rem", color: "black" }}
            />
            Continue with Apple
          </FormBtn>
          <Text>
            Don't have account ?{" "}
            <span style={{ fontWeight: "700", fontSize: "1rem" }}>Sign up</span>
          </Text>
        </TextDiv>
        <PicDiv></PicDiv>
        <Floter>Untiled UI</Floter>
      </Container>
    </>
  );
};

export default AboutPage;
