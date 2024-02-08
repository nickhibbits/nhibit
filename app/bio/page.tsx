import Image from "next/image";
import styles from "./page.module.scss";
import layoutStyles from "@/styles/layout.module.scss";
import dj_2 from "@/public/dj_2.jpg";

export default function Home() {
  return (
    <main className={`${styles.main} flex `}>
      <div className={styles.image_wrapper}>
        <Image
          className={styles.image}
          src={dj_2}
          width={2000}
          alt="DJ NHIBIT"
        />
      </div>
      <section className={layoutStyles.padding_wrapper}>
        <h1>About</h1>
        <p className={styles.text}>
          Drawing creative inspiration from his native west coast house scene
          and the minimal tech sound out of the UK, NHIBIT combines tight
          rhythms, driving basslines, and textures that creep and evolve to
          produce his own signature style. Blending club heaters and emotive
          arrangements into all his live mixes and original productions, he
          keeps the energy up on the dance floor and his listeners' focus
          locked. If you're seeking a fresh vibe with hypnotic grooves and lush
          melodies, you're in the right place.
        </p>
      </section>
    </main>
  );
}
