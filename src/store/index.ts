import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  auth,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;

export * from "./reducers/auth";

export { store };
