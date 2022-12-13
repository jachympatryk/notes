import React from "react";
import classNames from "classnames";
import { Box, Modal as ModalMUI, ModalProps } from "@mui/material";

import { backdropProps } from "./modal.constants";

import styles from "./modal.module.scss";

export const Modal: React.FC<ModalProps> = ({ open, children, className, onClose }) => {
  return (
    <ModalMUI open={open} BackdropProps={backdropProps} onClose={onClose}>
      <Box className={classNames(styles.container, className)}>{children}</Box>
    </ModalMUI>
  );
};
