import { useMutation, useQuery } from "@tanstack/react-query";
import { createJob, fetchJobs } from "../api/jobsApi";

const JOBS = "JOBS";

export const useJobs = () => {
  return useQuery([JOBS], fetchJobs);
};

export const useCreateJob = () => {
  return useMutation(createJob);
};
