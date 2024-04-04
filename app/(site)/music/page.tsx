import styles from "@/app/(site)/music/page.module.scss";
import layoutStyles from "@/styles/layout.module.scss";

import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import OriginalMusic from "@/components/Music/OriginalMusic/OriginalMusic";
import Mixes from "@/components/Music/Mixes/Mixes";

function Music() {
  return (
    <main className={`${styles.main} ${layoutStyles.padding_wrapper} grid `}>
      <BackgroundImage />
      <section className={styles.content_wrapper}>
        <h1 className={`${styles.title} header`}>Music</h1>
        <OriginalMusic />
        <Mixes />
      </section>
    </main>
  );
}

export default Music;
