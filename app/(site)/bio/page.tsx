import Image from "next/image";
import styles from "./page.module.scss";

import headshot from "@/public/headshot.jpeg";

import BioContent from "@/components/BioContent/BioContent";

export default function Bio() {
  return (
    <main className={`${styles.main} grid `}>
      <div className={styles.image_wrapper}>
        <Image className={styles.image} src={headshot} alt="NHIBIT headshot" />
      </div>
      <BioContent />
    </main>
  );
}
