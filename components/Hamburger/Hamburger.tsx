import React, { useEffect, useState } from "react";
import styles from "@/components/Hamburger/Hamburger.module.scss";

function Hamburger({ active }: { active: boolean }) {
  return (
    <div
      className={
        active ? `${styles.is_active} ${styles.hamburger}` : styles.hamburger
      }
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
}

export default Hamburger;
