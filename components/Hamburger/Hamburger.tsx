import React, { useState } from "react";
import styles from "@/components/Hamburger/Hamburger.module.scss";

function Hamburger() {
  const [active, setIsActive] = useState(false);

  console.log(active);

  return (
    <div
      className={active ? styles.is_active : styles.hamburger}
      onClick={(curr) => setIsActive(!curr)}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
}

export default Hamburger;
