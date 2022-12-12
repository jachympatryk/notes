import React from "react";

import { Page } from "components";
import { RouteConfig } from "types";

export const PageRoute: React.FC<RouteConfig> = ({ component: Component, showNavigation }) => {
  return (
    <Page showNavigation={showNavigation}>
      <Component />
    </Page>
  );
};
