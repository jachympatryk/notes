import React from "react";
import { useSelector } from "react-redux";

import { PageProps } from "./page.types";
import { Navigation } from "components";
import { RootState } from "store";

import styles from "./page.module.scss";

export const Page: React.FC<PageProps> = ({ children }) => {
  /* include header/footer if necessary */
  const { theme } = useSelector((state: RootState) => state.ui);

  return (
    <div className={styles.container} style={{ backgroundColor: theme }}>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};
