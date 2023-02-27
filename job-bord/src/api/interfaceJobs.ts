import { EntityMeta } from "./entity";
import { User } from "./interfaceUser";

export type JobType = 'freelance' | 'partTime' | 'fullTime';

export interface NewJob {
  title: string;
  description: string;
  price: number;
  type: JobType;
  starting_from: string;
  has_drivers_license: boolean;
  use_id: User['id'];
}


export type Job = NewJob & EntityMeta
