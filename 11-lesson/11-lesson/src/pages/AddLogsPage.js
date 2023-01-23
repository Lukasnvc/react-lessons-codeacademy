import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  MainContainer,
  Top,
  Title,
  AddPetForm,
  Input,
  Label,
} from "../components/listStyledComponent";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button/Button";

const AddLogsPage = () => {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      pet_id: id,
      description: description,
      status: status,
    };
    console.log(data);

    try {
      const response = await fetch(
        "https://glittery-dull-snickerdoodle.glitch.me/v1/logs/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        navigate(`/pet/${id}`, {
          state: {
            name: location.state.name,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainContainer>
      <Top>
        <Title>Add Log to {location.state.name}</Title>
      </Top>
      <>
        <AddPetForm onSubmit={handleSubmit}>
          <Label htmlFor="description">Description of ilness</Label>
          <Input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Label htmlFor="status">Status of Ilness</Label>
          <Input
            type="text"
            name="status"
            onChange={(e) => setStatus(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </AddPetForm>
      </>
    </MainContainer>
  );
};

export default AddLogsPage;
