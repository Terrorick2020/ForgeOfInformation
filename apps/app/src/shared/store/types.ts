import type { IRootStoreSettings } from "./settings/types";
import type { IRootStoreSystem } from "./system/types";
import type { Reducer, ThunkDispatch, Dispatch } from "@reduxjs/toolkit";
import type { PersistPartial } from "redux-persist/es/persistReducer";
import type { TSettSliceActions, TSysSliceActions } from ".";

export interface IRootStore {
  settings: IRootStoreSettings;
  system: IRootStoreSystem;
}

export enum ETypeDispatch {
  Set = "set",
  Reset = "reset",
}

export type TRootReducer = Reducer<IRootStore>;
export type TRootActions = TSettSliceActions | TSysSliceActions;

export type TRootDispatch = ThunkDispatch<
  IRootStore & PersistPartial,
  unknown,
  TRootActions
> &
  Dispatch<TRootActions>;
