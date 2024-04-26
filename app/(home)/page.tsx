import styles from "./page.module.scss";

import LogoSocialsWrapper from "@/components/LogoSocialsWrapper/LogoSocialsWrapper";
import BackgroundImageSequencer from "@/components/BackgroundImageSequencer/BackgroundImageSequencer";

export default function Home() {
  return (
    <main className={`${styles.main} flex `}>
      <BackgroundImageSequencer />
      <div
        className={`${styles.content_wrapper} ${styles.padding_wrapper} flex`}
      >
        <LogoSocialsWrapper />
      </div>
    </main>
  );
}
