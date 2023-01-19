import styled from "styled-components";
import { Button } from "../button/Button";
import { DeletePets } from "../../api/deletePets";

const Title = styled.h1`
  margin-bottom: 30px;
`;

const Text = styled.p`
  margin: 0;
`;

const ListCard = ({ id, name, dob, description, mail }) => {
  console.log(id, name, dob, description, mail);
  return (
    <>
      <Title>{name && name}</Title>
      <Text>{dob && new Date(dob).toLocaleDateString("lt")}</Text>
      <Text>{description && description}</Text>
      <Text>{mail && mail}</Text>
    </>
  );
};

export default ListCard;
