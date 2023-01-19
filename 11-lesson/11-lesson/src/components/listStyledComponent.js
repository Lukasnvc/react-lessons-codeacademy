import styled from "styled-components";
export const MainContainer = styled.div`
  width: 90vw;
  margin: auto;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: grey;
`;

export const BtnContain = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin: 50px auto;
`;
export const PetCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  color: grey;
`;
