import React, { useState } from "react";
import { Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classNames from "classnames";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { AddNoteProps } from "./add-note.types";
import { notesCategories } from "../notes.constants";
import { initialValues } from "./add-note.constants";
import { FormTextField } from "components";
import { refreshNotes, RootState } from "store";
import { NoteModels } from "models";
import { createNote } from "firestore";

import styles from "./add-note.module.scss";

export const AddNote: React.FC<AddNoteProps> = ({ handleCloseModal }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);

  const [category, setCategory] = useState(notesCategories[0]);

  const handleSubmit = async ({ title, content }: { title: string; content: string }) => {
    if (user) {
      const data: NoteModels = {
        userId: user.uid,
        title,
        content,
        category: category.category,
        important: false,
      };

      try {
        await createNote(data);
        dispatch(refreshNotes());
        handleCloseModal();
      } catch (error) {
        // TODO add snackbar
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography>Add new note</Typography>
        <IconButton onClick={handleCloseModal} className={styles.closeIcon}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className={styles.content}>
        <div className={styles.category}>
          {notesCategories.map((item) => {
            const isActive = item.category === category.category;
            return (
              <Button
                style={{ backgroundColor: `${item.color}` }}
                onClick={() => setCategory(item)}
                className={classNames(styles.categoryWrapper, isActive && styles.activeCategory)}
              >
                <Typography>{item.category}</Typography>
              </Button>
            );
          })}
        </div>
        <div className={styles.note}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={styles.fieldsWrapper} style={{ backgroundColor: `${category.color}` }}>
              <div className={styles.titleWrapper}>
                <FormTextField name="title" placeholder="Your note title" label="Title" />
              </div>
              <div className={styles.descriptionWrapper}>
                <FormTextField name="content" placeholder="Add description to your note" label="Description" />
              </div>

              <Button type="submit">add</Button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
