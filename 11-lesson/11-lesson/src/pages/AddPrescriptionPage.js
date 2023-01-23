import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  MainContainer,
  Top,
  Title,
  AddPetForm,
  Input,
  Label,
  Select,
} from "../components/listStyledComponent";
import useDocumentTitle from "../components/title/title";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button/Button";
import { GetMeds } from "../api/getMeds";

const AddPrescriptionPage = () => {
  useDocumentTitle("Add Prescription");
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const [list, setList] = useState(undefined);
  useEffect(() => {
    fetch(GetMeds)
      .then((resp) => resp.json())
      .then((data) => {
        setList(data);
      })
      .catch((err) => console.err(err));
  }, []);

  const [medication_id, setMedication_id] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      medication_id: medication_id,
      pet_id: +id,
      comment: comment,
    };
    console.log(data);

    try {
      const response = await fetch(
        "https://glittery-dull-snickerdoodle.glitch.me/v1/prescriptions/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        // navigate(`/pet/${id}`, {
        //   state: {
        //     name: location.state.name,
        //   },
        // });
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainContainer>
      <Top>
        <Title>Add Prescription to {location.state.name}</Title>
      </Top>
      <>
        <AddPetForm onSubmit={handleSubmit}>
          <Label htmlFor="medication_id">Medication</Label>
          <Select
            value={medication_id}
            onChange={(e) => setMedication_id(e.target.value)}>
            {list &&
              list.map((x) => (
                <option value={x.id} key={new Date() + x.id}>
                  {x.name}
                </option>
              ))}
          </Select>

          <Label htmlFor="comment">Comment</Label>
          <Input
            type="text"
            name="comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </AddPetForm>
      </>
    </MainContainer>
  );
};

export default AddPrescriptionPage;
