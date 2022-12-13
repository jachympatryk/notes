import { RouteConstant } from "types";

export const LANDING_PAGE: RouteConstant = {
  path: "/",
  name: "Main page",
  auth: false,
};

export const NOTES_PAGE: RouteConstant = {
  path: "/notes",
  name: "Notes",
  auth: true,
};
