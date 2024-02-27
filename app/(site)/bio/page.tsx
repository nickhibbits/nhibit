import Image from "next/image";
import styles from "./page.module.scss";

import headshot from "@/public/headshot.jpeg";

import BioContent from "@/components/BioContent/BioContent";
import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";

export default function Bio() {
  return (
    <main className={`${styles.main} grid `}>
      <BackgroundImage />
      <div className={styles.image_wrapper}>
        <Image className={styles.image} src={headshot} alt="NHIBIT headshot" />
      </div>
      <BioContent />
    </main>
  );
}
