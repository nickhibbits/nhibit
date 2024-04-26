"use client";
import layoutStyles from "@/styles/layout.module.scss";
import styles from "@/components/BioContent/BioContent.module.scss";

import { Libre_Franklin, Oxygen } from "next/font/google";
import { useEnableFadeTransition } from "@/hooks/useEnableFadeTransition";

const lf = Libre_Franklin({ weight: "300", subsets: ["latin"] });
const oxygen = Oxygen({ weight: "700", subsets: ["latin"] });

function BioContent() {
  const { pageLoaded } = useEnableFadeTransition();

  return (
    <section
      className={`${styles.bio_content} ${oxygen.className} ${layoutStyles.padding_wrapper}`}
      data-visible={pageLoaded ? "true" : "false"}
    >
      <h1 className={styles.h1}>Bio</h1>
      <p className={lf.className}>
        Drawing creative inspiration from his native west coast house scene and
        the minimal tech sound out of Europe, NHIBIT combines tight rhythms,
        driving basslines, and textures that creep and evolve to produce his own
        signature style.
        <br />
        <br /> Blending club heaters and emotive arrangements into his live
        mixes and original productions, he keeps the energy up on the dance
        floor and his listeners' focus locked. <br />
        <br />
        If you're seeking a fresh vibe with hypnotic grooves and lush melodies,
        look no further.
      </p>
    </section>
  );
}

export default BioContent;
