import { Job } from "../api/interfaceJobs";
import styled from "styled-components";
import { blue, brown, grey } from "../utils/colors";

interface Props {
  job: Job;
}

function JobsListItem({ job }: Props) {
  const timeToNorm = (time: string) => {
    const formattedDate = new Date(time).toISOString().replace('T', ' ').slice(0, 19);
    return  formattedDate
  }
  return (
    <Container>
      <h2>{job.title}</h2>
      <span>{timeToNorm(job.createdAt)}</span>
      <p>{job.description}</p>
      <Details>
        <p>Job type : {job.type}</p>
        <p>Drivers licensens : {job.has_drivers_license ? 'Yes' : "No" }</p>
        <p>Salary : ${job.price}</p>
        <p>Starting : {timeToNorm(job.starting_from)}</p>
      </Details>
    </Container>
  )
}

export default JobsListItem

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  margin: auto;
  border: 1px solid ${brown};
  padding: 20px;
  border-radius: 5px;
  background-color: ${grey};
  cursor: pointer;

  h2 {
    color: ${blue};
    margin-bottom: 10px;
  }
  span {
    font-size: 0.6rem;
    color: gray;
    margin: 10px;
  }
`

const Details = styled.div`
  margin: 10px;
  font-size: 0.9rem;
  color: ${blue};
  display: flex;
  gap: 20px;
  justify-content: space-evenly;

  p {
    padding: 0 5px;
    border-bottom: 1px solid ${brown};
  }
`