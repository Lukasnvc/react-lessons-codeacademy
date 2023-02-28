import styled from "styled-components";
import logo from "../../assets/4734105_2392476.jpg";
import Button from "../../components/Button/Button";
import {
  borderRadius,
  lighterBlue,
  lightGrey,
  mainBgColor,
  mediumGrey,
  smallBorderRadius,
} from "../../const/styles";
import { Job } from "../../types/job";
import { formatDate } from "../../utils/date";

interface JobCardProps {
  job: Job;
}
const JobCard = ({ job }: JobCardProps) => {
  return (
    <Container>
      <LeftWrapper>
        <img src={logo} alt="company logo" />
      </LeftWrapper>
      <MiddleWrapper>
        <Title>
          {job.title} <span>{job.type}</span>
        </Title>
        <Details>
          <p>
            Driver's license required:{" "}
            {job.has_drivers_license ? <span>yes</span> : <span>no</span>}
          </p>
          <p>
            Starting from: <span>{formatDate(job.starting_from)}</span>
          </p>
        </Details>
        <Description>{job.description}</Description>
      </MiddleWrapper>
      <RightWrapper>
        <Price>€{job.price}</Price>
        <Button title="apply" onClick={() => null}/>
      </RightWrapper>
    </Container>
  );
};
export default JobCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(201, 200, 206, 0.6) 0px 2px 8px 0px;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  gap: 16px;
`;

const LeftWrapper = styled.div`
  display: flex;

  img {
    width: 80px;
    border-radius: ${borderRadius};
  }
`;

const MiddleWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    font-size: 0.8rem;
    color: ${mainBgColor};
    background-color: ${lightGrey};
    border-radius: ${smallBorderRadius};
    padding: 3px;
  }
`;

const Details = styled.div`
  display: flex;
  gap: 12px;
  color: ${mediumGrey};
  font-size: 1rem;

  span {
    color: ${lighterBlue};
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${mediumGrey};
  margin-top: 6px;
`;

const Price = styled.p`
  font-size: 1.7rem;
`;
