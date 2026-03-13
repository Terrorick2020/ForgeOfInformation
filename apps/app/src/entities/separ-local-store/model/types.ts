import { separLocStorePref } from "./constants";

export interface ISeparLocalStore {
  login?: string | null;
}

export enum ESeparLocalStore {
  Login = `${separLocStorePref}login`,
}
