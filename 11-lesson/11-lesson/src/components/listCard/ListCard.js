import styled from "styled-components";

const Title = styled.h1`
  margin-bottom: 30px;
`;

const Text = styled.p`
  margin: 0;
`;

const ListCard = ({ id, name, dob, description, mail, status }) => {
  return (
    <>
      <Title>{name && name}</Title>
      <Text>{dob && new Date(dob).toLocaleDateString("lt")}</Text>
      <Text>{description && description}</Text>
      <Text>{mail && mail}</Text>
      <Text>{status && status}</Text>
    </>
  );
};

export default ListCard;
