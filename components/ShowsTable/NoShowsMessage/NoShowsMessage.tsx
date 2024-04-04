"use client";

import { useEnableFadeTransition } from "@/hooks/useEnableFadeTransition";
import styles from "./NoShowsMessage.module.scss";

function NoShowsMessage() {
  const { pageLoaded } = useEnableFadeTransition();
  return (
    <p
      className={styles.no_shows_message}
      data-visible={pageLoaded ? "true" : "false"}
    >
      No shows scheduled. For bookings contact{" "}
      <a
        href="mailto:nhibitmusic@gmail.com"
        style={{ textDecoration: "underline" }}
      >
        nhibitmusic@gmail.com
      </a>
    </p>
  );
}

export default NoShowsMessage;
