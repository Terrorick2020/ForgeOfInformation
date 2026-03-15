import { ETheme, EProfileRoles, EProfileStatus } from "@libs/config";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IRootStoreSettings } from "./types";

const initialState: IRootStoreSettings = {
  theme: ETheme.Light,
  status: EProfileStatus.Active,
  role: EProfileRoles.Admin,
  maxNotifiCount: 3,
};

const settSliceName: string = "settings-slice";
const settSlice = createSlice({
  name: settSliceName,
  initialState,
  reducers: {
    setSettSlice: (
      state,
      action: PayloadAction<Partial<IRootStoreSettings>>,
    ) => {
      state = { ...action.payload, ...state };
    },
    toggleTheme: (state) => {
      if (state.theme === ETheme.Light) state.theme = ETheme.Dark;
      else state.theme = ETheme.Light;
    },
    resetSettSlice: (state) => {
      state = initialState;
    },
  },
  extraReducers: (_build) => {},
});

export type TSettSliceActions = ReturnType<
  (typeof settSlice.actions)[keyof typeof settSlice.actions]
>;

export const { setSettSlice, toggleTheme, resetSettSlice } = settSlice.actions;
export { settSliceName };
export default settSlice.reducer;
