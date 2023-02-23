import { fetchJobs } from "../api/jobs";
import { useQuery } from "@tanstack/react-query";

const JOBS = 'JOBS';

export const useJobs = () => { return useQuery([JOBS], fetchJobs)}