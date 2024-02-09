import Image from "next/image";
import styles from "./page.module.scss";
import layoutStyles from "@/styles/layout.module.scss";
import headshot from "@/public/headshot.jpeg";

import { Libre_Franklin, Oxygen } from "next/font/google";

const lf = Libre_Franklin({ weight: "300", subsets: ["latin"] });
const oxygen = Oxygen({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${styles.main} grid `}>
      <div className={styles.image_wrapper}>
        <Image className={styles.image} src={headshot} alt="NHIBIT headshot" />
      </div>
      <section
        className={`${styles.text_wrapper} ${oxygen.className} ${layoutStyles.padding_wrapper}`}
      >
        <h1>About</h1>
        <p className={lf.className}>
          Drawing creative inspiration from his native west coast house scene
          and the minimal tech sound out of the UK, NHIBIT combines tight
          rhythms, driving basslines, and textures that creep and evolve to
          produce his own signature style.
          <br />
          <br /> Blending club heaters and emotive arrangements into all his
          live mixes and original productions, he keeps the energy up on the
          dance floor and his listeners' focus locked. <br />
          <br />
          If you're seeking a fresh vibe with hypnotic grooves and lush
          melodies, you're in the right place.
        </p>
      </section>
    </main>
  );
}
