import { createJob, fetchJobs } from "../api/jobs";
import { useMutation, useQuery } from "@tanstack/react-query";

const JOBS = 'JOBS';

export const useJobs = () => { return useQuery([JOBS], fetchJobs) };

export const useCreateJob = () => { return useMutation(createJob) };