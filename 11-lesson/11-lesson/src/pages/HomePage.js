import React from "react";
import { useEffect, useState } from "react";
import { GetPets } from "../api/getPets";
import ListCard from "../components/listCard/ListCard";
import {
  MainContainer,
  Top,
  Title,
  BtnContain,
  ListContainer,
  PetCard,
} from "../components/listStyledComponent";
import { Button } from "../components/button/Button";
import { Link } from "react-router-dom";
import { DeletePets } from "../api/deletePets";
import useDocumentTitle from "../components/title/title";

const HomePage = () => {
  useDocumentTitle("Vet page");
  const getData = () => {
    fetch(GetPets)
      .then((resp) => resp.json())
      .then((data) => {
        setList(data);
      })
      .catch((err) => console.err(err));
  };

  const [list, setList] = useState(undefined);
  useEffect(() => {
    getData();
  }, []);

  const deleteHandle = (id) => {
    fetch(DeletePets + id, {
      method: "DELETE",
    }).then((res) => {
      res.json().then((resp) => {
        getData();
      });
    });
  };
  return (
    <MainContainer>
      <Top>
        <Title>Pet List</Title>
        <Button as={Link} to="/addPet">
          ADD PET
        </Button>
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
                mail={item.client_email}
              />
              <BtnContain>
                <Button
                  as={Link}
                  to={`/pet/${item.id}`}
                  state={{
                    name: item.name,
                  }}>
                  VIEW LOGS
                </Button>
                <Button
                  background="white"
                  color="orange"
                  onClick={() => deleteHandle(item.id)}>
                  DELETE
                </Button>
              </BtnContain>
            </PetCard>
          ))}
      </ListContainer>
    </MainContainer>
  );
};

export default HomePage;
