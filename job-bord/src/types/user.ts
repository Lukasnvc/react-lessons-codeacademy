import { EntityMeta } from "./entity";

export type NewUser = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};

export type User = NewUser & EntityMeta;

export type LoginUser = Omit<NewUser, "first_name" | "last_name">;
