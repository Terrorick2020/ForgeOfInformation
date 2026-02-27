import { createSlice } from '@reduxjs/toolkit';
import { ETheme, type IRootStoreSettings } from './types';

const initialState: IRootStoreSettings = {
  theme: ETheme.Light,
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
