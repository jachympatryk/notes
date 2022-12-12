import React from "react";

import { PageProps } from "./page.types";
import { Navigation } from "components";

import styles from "./page.module.scss";

export const Page: React.FC<PageProps> = ({ children }) => {
  /* include header/footer if necessary */

  return (
    <div className={styles.container}>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};
