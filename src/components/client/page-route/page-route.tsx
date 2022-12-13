import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDidUpdate } from "@better-typed/react-lifecycle-hooks";

import { Page } from "components";
import { RouteConfig } from "types";
import { RootState } from "store";
import { LANDING_PAGE } from "constants/routes.constants";

export const PageRoute: React.FC<RouteConfig> = ({ component: Component, auth }) => {
  const navigate = useNavigate();

  const { user } = useSelector((state: RootState) => state.auth);

  const isAuthenticated = Boolean(user);

  useDidUpdate(() => {
    if (auth && !isAuthenticated) navigate(LANDING_PAGE.path);
  }, [auth]);

  return (
    <Page>
      <Component />
    </Page>
  );
};
