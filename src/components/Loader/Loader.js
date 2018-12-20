import React from "react";
import styles from "./Loder.module.css";

const Loader = () => (
  <div className={styles.loader}>
    <div>
      <div className={styles.lds__gear}>
        <div>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  </div>
);

export default Loader;
