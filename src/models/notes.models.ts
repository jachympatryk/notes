import { CategoryData } from "./category.models";

export type NoteModels = {
  title: string;
  content: string;
  userId: string;
  category: CategoryData;
  important: boolean;
};
