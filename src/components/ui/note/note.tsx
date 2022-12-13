import React from "react";
import { IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import classNames from "classnames";
import { useSnackbar } from "notistack";

import { NoteModels } from "models";
import { notesCategories } from "pages/notes/notes.constants";
import { deleteNote } from "firestore";
import { refreshNotes } from "store";

import styles from "./note.module.scss";

export const Note: React.FC<{ note: NoteModels }> = ({ note }) => {
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();
  const { content, category, important, title, id } = note;

  const handleDeleteNote = async (idToDelete: string) => {
    try {
      await deleteNote(idToDelete);
      enqueueSnackbar("Note deleted successfully", { variant: "success" });
      dispatch(refreshNotes());
    } catch (err) {
      enqueueSnackbar("error", { variant: "error" });
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  const color = notesCategories.find((item) => item.category === category)?.color || "";

  return (
    <div
      className={classNames(styles.container, important && styles.important)}
      style={{ backgroundColor: `${color}` }}
    >
      <div className={styles.header}>
        <Typography className={styles.title}>{title}</Typography>
        <IconButton className={styles.closeIcon} onClick={() => handleDeleteNote(id || "")}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};
