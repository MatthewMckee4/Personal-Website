import React from "react";
import styles from "./GenericPage.module.css";

function GenericPage({ title, children }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
}

export default GenericPage;
