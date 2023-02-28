import Jobs from "../pages/Jobs/Jobs";
import Users from "../pages/Users/Users";
import { Route } from "../types/routes";

export const JOBS_PATH = "/";
export const USERS_PATH = "/users";

export const routes: Route[] = [
  { path: JOBS_PATH, Component: Jobs },
  { path: USERS_PATH, Component: Users },
];
