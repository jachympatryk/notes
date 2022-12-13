import { CategoryData } from "models";

export type AddNoteProps = {
  handleCloseModal: () => void;
};

export type NoteData = {
  category: CategoryData;
  title: string;
  content: string;
  important: boolean;
};
