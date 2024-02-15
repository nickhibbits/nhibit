import styles from "@/app/(site)/music/page.module.scss";
import layoutStyles from "@/styles/layout.module.scss";
import MusicArtworkWrapper from "@/components/MusicArtworkWrapper/MusicArtworkWrapper";

function Music() {
  return (
    <main className={`${styles.main} ${layoutStyles.padding_wrapper} grid `}>
      <section className={styles.content_wrapper}>
        <h1 className={`${styles.title} header`}>Music</h1>
        <MusicArtworkWrapper />
      </section>
    </main>
  );
}

export default Music;
