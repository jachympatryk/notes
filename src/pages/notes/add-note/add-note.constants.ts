import { NoteData } from "./add-note.types";

export const initialValues: NoteData = {
  category: "life",
  content: "",
  important: false,
  title: "",
};

export const sx = {
  width: "100%",
};

export const inputProps = {
  title: {
    style: {
      color: "#fff",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      fontSize: "22px",
      textAlign: "center",
    },
  },
  content: {
    style: {
      color: "#ffffff",
      fontFamily: "Montserrat",
      fontSize: "18px",
    },
  },
};
