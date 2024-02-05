import Image from "next/image";
import styles from "./page.module.scss";
import headshot from "@/public/headshot.jpeg";

export default function Home() {
  return (
    <main className={`${styles.main} flex `}>
      <div className={styles.image_wrapper}>
        <Image className={styles.image} src={headshot} alt="DJ NHIBIT" />
      </div>
      <section>
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
