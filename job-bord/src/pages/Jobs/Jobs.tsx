import {useState} from 'react'
import { useJobs } from '../../hooks/jobs';
import styled from 'styled-components';
import JobsListItem from '../../components/JobsListItem';
import JobModal from '../../components/JobModal';


export default function Jobs() {
  const { data: jobs, isLoading } = useJobs();
  if (isLoading) {
    return <div>Jobs are loading...</div>
  }
  if (!isLoading && !jobs?.length) {
    return <div>There are no jobs added yet</div>
  } 
  return (
    <Wrapper>
      
    <JobModal/>
      
      <JobsContainer>
      {jobs.map(job =>  <JobsListItem key={job.id} job={job}/>)}
      </JobsContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1000px;
  height: 100vh;
  margin: auto;
`

const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;
`