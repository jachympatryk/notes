import { LandingPage } from "pages";
import { RouteConfig } from "types";
import { LANDING_PAGE } from "constants/routes.constants";

export const routes: RouteConfig[] = [{ ...LANDING_PAGE, component: LandingPage }];
