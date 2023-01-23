import styled from "styled-components";
import { GetMeds } from "../api/getMeds";
import { useState, useEffect } from "react";
import ListCard from "../components/listCard/ListCard";
import {
  MainContainer,
  Top,
  Title,
  ListContainer,
  PetCard,
} from "../components/listStyledComponent";
import useDocumentTitle from "../components/title/title";
import { Button } from "../components/button/Button";
import { Link } from "react-router-dom";

const MedsPage = () => {
  useDocumentTitle("Meds page");
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
        <div>
          <Button as={Link} to="/addMeds">
            ADD MEDICATION
          </Button>
        </div>
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
