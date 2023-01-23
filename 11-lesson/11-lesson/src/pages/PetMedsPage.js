import { useParams } from "react-router-dom";
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
import { useLocation } from "react-router-dom";

const PetMedsPage = () => {
  const location = useLocation();
  useDocumentTitle("Health Log");

  const [list, setList] = useState(undefined);
  const [meds, setMeds] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${+id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setList(data);
      })
      .catch((err) => console.err(err));
  }, []);

  useEffect(() => {
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/prescriptions/")
      .then((resp) => resp.json())
      .then((data) => {
        setMeds(data);
        console.log("meds", meds);
      })
      .catch((err) => console.err(err));
  }, []);

  return (
    <MainContainer>
      <Top>
        <Title>{location.state.name}: Health Records</Title>
        <div>
          <Button
            as={Link}
            to={`/addpresc/${id}`}
            state={{
              name: location.state.name,
            }}
            disabled={true}>
            ADD PRESCRIPTION
          </Button>
          <Button
            background="white"
            color="orange"
            as={Link}
            to={`/addlogs/${id}`}
            state={{
              name: location.state.name,
            }}>
            ADD LOG
          </Button>
        </div>
      </Top>
      <ListContainer>
        {list &&
          list.map((item) => (
            <PetCard key={item.id + item.description}>
              <ListCard
                id={item.id}
                name={item.name}
                dob={item.dob}
                description={item.description}
                mail={item.mail}
                status={item.status}
              />
            </PetCard>
          ))}
      </ListContainer>
    </MainContainer>
  );
};

export default PetMedsPage;
