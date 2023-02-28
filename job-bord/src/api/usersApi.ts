import axios from "axios";
import { LoginUser, NewUser, User } from "../types/user";

const USERS_API_URL = "https://testapi.io/api/rokasandreikenas/resource/user";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(USERS_API_URL);
  return response.data.data;
};

export const createUser = async (newUser: NewUser): Promise<User> => {
  const response = await axios.post(USERS_API_URL, newUser);
  return response.data;
};

export const loginUser = async (loggingUser: LoginUser): Promise<User> => {
  const users = await fetchUsers();
  return new Promise((resolve, reject) => {
    const { email, password } = loggingUser;
    const userChecker = (u: User) =>
      u.email === email && u.password === password;
    const existingUser = users.find(userChecker);

    existingUser ? resolve(existingUser) : reject("Invalid credentials");
  });
};
