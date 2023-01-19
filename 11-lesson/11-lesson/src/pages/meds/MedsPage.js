import styled from "styled-components";
import { GetMeds } from "../../api/getMeds";
import { useState, useEffect } from "react";
import { Button } from "../../components/button/Button";
import ListCard from "../../components/listCard/ListCard";
import {
  MainContainer,
  Top,
  Title,
  BtnContain,
  ListContainer,
  PetCard,
} from "../../components/listStyledComponent";

const MedsPage = () => {
  const [list, setList] = useState(undefined);
  useEffect(() => {
    fetch(GetMeds)
      .then((resp) => resp.json())
      .then((data) => {
        setList(data);
        console.log(data);
      })
      .catch((err) => console.err(err));
  }, []);
  return (
    <MainContainer>
      <Top>
        <Title>Medication List</Title>
      </Top>
      <ListContainer>
        {list &&
          list.map((item) => (
            <PetCard key={item.id}>
              <ListCard
                id={item.id}
                name={item.name}
                dob={item.dob}
                description={item.description}
                mail={item.mail}
              />
            </PetCard>
          ))}
      </ListContainer>
    </MainContainer>
  );
};

export default MedsPage;
