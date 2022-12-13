import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NoteModels } from "models";

interface AppData {
  notes: NoteModels[] | [];
  notesRefresher: number;
}

type InitialState = AppData;

const initialState: InitialState = {
  notes: [],
  notesRefresher: 0,
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    setNotes: (state, action: PayloadAction<NoteModels[]>) => {
      state.notes = action.payload;
    },
    refreshNotes: (state) => {
      state.notesRefresher += 1;
    },
  },
});

export const { setNotes, refreshNotes } = app.actions;

export default app.reducer;
