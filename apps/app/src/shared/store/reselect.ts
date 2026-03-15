import type { IRootStore } from '.';

export const selectSett = (state: IRootStore) => state.settings;
export const selectSys = (state: IRootStore) => state.system;
