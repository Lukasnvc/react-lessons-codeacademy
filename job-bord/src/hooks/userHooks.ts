import { useMutation, useQuery } from "@tanstack/react-query";
import { createUser, loginUser, fetchUsers } from "../api/usersApi";
const USERS = "USERS";

export const useUsers = () => {
  return useQuery([USERS], fetchUsers);
};

export const useCreateUser = () => {
  return useMutation(createUser);
};

export const useLoginUser = () => {
  return useMutation(loginUser);
};
