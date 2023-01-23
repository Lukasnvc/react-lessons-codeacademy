import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button/Button";
import { GetMeds } from "../api/getMeds";
import {
  MainContainer,
  Top,
  Title,
  AddPetForm,
  Input,
  Label,
} from "../components/listStyledComponent";
import useDocumentTitle from "../components/title/title";

const AddMedsPage = () => {
  useDocumentTitle("Add Medication");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { name, description };
    console.log(data);

    try {
      const response = await fetch(GetMeds, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        navigate("/meds");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainContainer>
      <Top>
        <Title>Add Medication</Title>
      </Top>
      <>
        <AddPetForm onSubmit={handleSubmit}>
          <Label htmlFor="name">Name of Medication</Label>
          <Input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />

          <Label htmlFor="description">Medication Description</Label>
          <Input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </AddPetForm>
      </>
    </MainContainer>
  );
};

export default AddMedsPage;
