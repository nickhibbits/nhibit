import React, { useEffect, useState } from "react";
import styles from "@/components/Hamburger/Hamburger.module.scss";

function Hamburger() {
  const [active, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((curr) => !curr);
  };

  return (
    <div
      className={
        active ? `${styles.is_active} ${styles.hamburger}` : styles.hamburger
      }
      onClick={() => handleClick()}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
}

export default Hamburger;
