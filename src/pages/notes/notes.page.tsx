import React, { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import AddCardIcon from "@mui/icons-material/AddCard";
import { IconButton, Typography } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { useDidUpdate } from "@better-typed/react-lifecycle-hooks";

import { RootState } from "store";
import { Modal, Note } from "components";
import { AddNote } from "./add-note/add-note";

import styles from "./notes.module.scss";

export const NotesPage = () => {
  const { notes } = useSelector((state: RootState) => state.app);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAddNoteOpen, setIsAddNoteOpen] = useState<boolean>(false);

  const handleAddNote = () => {
    setIsModalOpen(true);
    setIsAddNoteOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);
  const modalComponent = (): ReactElement => {
    if (isAddNoteOpen) return <AddNote handleCloseModal={handleCloseModal} />;

    return <AddNote handleCloseModal={handleCloseModal} />;
  };

  useDidUpdate(() => {
    if (!isModalOpen) {
      setIsAddNoteOpen(false);
    }
  }, [isModalOpen]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography className={styles.title}>NOTES</Typography>
          <div className={styles.panel}>
            <IconButton>
              <PriorityHighIcon className={styles.icon} />
            </IconButton>
            <IconButton onClick={handleAddNote}>
              <AddCardIcon className={styles.icon} />
            </IconButton>
          </div>
        </div>

        <div className={styles.notesWrapper}>
          {notes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </div>
      </div>
      <Modal open={isModalOpen}>{modalComponent()}</Modal>
    </>
  );
};
