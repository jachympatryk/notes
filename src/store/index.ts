import { combineReducers, configureStore } from "@reduxjs/toolkit";

// eslint-disable-next-line import/default
import auth from "./reducers/auth";
import ui from "./reducers/ui";
import app from "./reducers/app";

const reducer = combineReducers({
  auth,
  ui,
  app,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;

export * from "./reducers/auth";
export * from "./reducers/ui";
export * from "./reducers/app";

export { store };
