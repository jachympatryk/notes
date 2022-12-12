import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { ProviderProps } from "./providers.types";
import { store } from "store";

export const Providers: React.FC<ProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};
