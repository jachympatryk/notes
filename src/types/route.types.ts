import React from "react";

export interface RouteConfig {
  path: string;
  component: React.FC;
  name: string;
  auth: boolean;
}

export type RouteConstant = Omit<RouteConfig, "component">;
