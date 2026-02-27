import type { IRootStoreSettings } from './settings/types';
import type { Reducer } from '@reduxjs/toolkit';

export interface IRootStore {
  settings: IRootStoreSettings;
}

export enum ETypeDispatch {
  Set = 'set',
  Reset = 'reset',
}

export type TRootReducer = Reducer<IRootStore>;