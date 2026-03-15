import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IRootStoreSystem, IRSSystemNotifi } from "./types";

const initialState: IRootStoreSystem = {
  notifis: [],
};

const sysSliceName: string = "system-slice";
const sysSlice = createSlice({
  name: sysSliceName,
  initialState,
  reducers: {
    addNotifi: (state, action: PayloadAction<IRSSystemNotifi>) => {
      state.notifis.push(action.payload);
    },
    delNotifi: (state, action: PayloadAction<IRSSystemNotifi["id"]>) => {
      state.notifis = state.notifis.filter(
        (item) => item.id !== action.payload,
      );
    },
    resetSysSlice: (state) => {
      state = initialState;
    },
  },
  extraReducers: (_build) => {},
});

export type TSysSliceActions = ReturnType<
  (typeof sysSlice.actions)[keyof typeof sysSlice.actions]
>;

export const { addNotifi, delNotifi, resetSysSlice } = sysSlice.actions;
export { sysSliceName };
export default sysSlice.reducer;
