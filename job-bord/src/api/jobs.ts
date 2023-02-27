// import { Jobs } from "./interfaceJobs";
import axios from "axios";
import { Job, NewJob } from "./interfaceJobs";


const JOBS_API_URL = 'https://testapi.io/api/rokasandreikenas/resource/jobs';



export const fetchJobs = async (): Promise<Job[]> => {
  const response : any = await axios
    .get(JOBS_API_URL);
  return response.data.data;
}

export const createJob = (job: any): Promise<NewJob> => {  return axios.post(JOBS_API_URL, job).then((response) => response.data.data);};