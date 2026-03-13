import { createSlice } from '@reduxjs/toolkit';
import { ETheme, EProfileRoles, EProfileStatus } from '@libs/config';
import type { IRootStoreSettings } from './types';

const initialState: IRootStoreSettings = {
  theme: ETheme.Light,
  status: EProfileStatus.Active,
  role: EProfileRoles.Admin,
}

const settSliceName: string = 'settings-slice';
const settSlice = createSlice({
  name: settSliceName,
  initialState,
  reducers: {},
  extraReducers: _build => {}
})

export const {} = settSlice.actions;
export { settSliceName };
export default settSlice.reducer;
