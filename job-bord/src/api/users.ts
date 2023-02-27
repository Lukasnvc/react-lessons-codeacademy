import axios from 'axios';
import { CreateUserRequest, LoginUser, User } from './interfaceUser';

const USERS_API_URL = "https://testapi.io/api/rokasandreikenas/resource/user";

//visus any pakeisti realiomis reiksmemis

interface UserResponse {
  data: User[]
}

export const fetchUsers = (): Promise<User[]> => {
  return axios
    .get<UserResponse>(USERS_API_URL)
    .then((response) => response.data.data);
};

// Aprasyti kurimui skirta tipa Omit

export const createUser = (user:CreateUserRequest): Promise<User> => { return axios.post(USERS_API_URL, user).then((response) => response.data); };

export const loginUser = async (loggingUser: LoginUser): Promise<User> => {
  const users = await fetchUsers();
  return new Promise((resolve, reject) => {
    const { email, password } = loggingUser; const userChecker = (u:User) => u.email === email && u.password === password;

    const existingUser = users.find(userChecker); existingUser ? resolve(existingUser) : reject("Invalid credentials");
  });
};

