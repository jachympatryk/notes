import { combineReducers, configureStore } from "@reduxjs/toolkit";

// eslint-disable-next-line import/default
import auth from "./reducers/auth";

const reducer = combineReducers({
  auth,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;

export * from "./reducers/auth";

export { store };
