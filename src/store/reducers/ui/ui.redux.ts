import { createSlice } from "@reduxjs/toolkit";

import { ui as uiData } from "constants/ui.constants";

interface UiData {
  theme: string;
}

const initialState: UiData = {
  theme: uiData.light,
};

const ui = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLightTheme: (state) => {
      state.theme = uiData.light;
    },
    setDarkTheme: (state) => {
      state.theme = uiData.dark;
    },
  },
});

export const { setLightTheme, setDarkTheme } = ui.actions;

export default ui.reducer;
