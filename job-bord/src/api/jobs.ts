import axios, { AxiosResponse } from "axios";


const JOBS_API_URL = 'https://testapi.io/api/rokasandreikenas/resource/jobs';

export const fetchJobs = (): Promise<any> => {
  return axios
    .get(JOBS_API_URL)
    .then((response) => response.data.data);
}