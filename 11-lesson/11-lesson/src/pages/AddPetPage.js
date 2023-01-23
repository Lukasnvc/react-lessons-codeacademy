import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button/Button";
import {
  MainContainer,
  Top,
  Title,
  AddPetForm,
  Input,
  Label,
} from "../components/listStyledComponent";
import useDocumentTitle from "../components/title/title";

const AddPet = () => {
  useDocumentTitle("Add pet");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [client_email, setClientEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name, dob, client_email };
    console.log(data);

    try {
      const response = await fetch(
        "https://glittery-dull-snickerdoodle.glitch.me/v1/pets",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainContainer>
      <Top>
        <Title>Add Pet</Title>
      </Top>
      <>
        <AddPetForm onSubmit={handleSubmit}>
          <Label htmlFor="name">Pet Name</Label>
          <Input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <Label htmlFor="dob">Birth Date</Label>
          <Input
            type="date"
            name="dob"
            onChange={(e) => setDob(e.target.value)}
          />
          <Label htmlFor="client_email">Owners Email</Label>
          <Input
            type="email"
            name="client_email"
            onChange={(e) => setClientEmail(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </AddPetForm>
      </>
    </MainContainer>
  );
};

export default AddPet;
