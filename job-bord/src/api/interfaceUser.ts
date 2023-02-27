import { EntityMeta } from "./entity";

export interface User extends EntityMeta {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface LoginUser{
  email: string;
  password: string;
}

export type CreateUserRequest = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;