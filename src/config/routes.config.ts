import { LandingPage } from "pages";
import { RouteConfig } from "types";
import { LANDING_PAGE, NOTES_PAGE } from "constants/routes.constants";
import { NotesPage } from "../pages/notes/notes.page";

export const routes: RouteConfig[] = [
  { ...LANDING_PAGE, component: LandingPage },
  { ...NOTES_PAGE, component: NotesPage },
];
