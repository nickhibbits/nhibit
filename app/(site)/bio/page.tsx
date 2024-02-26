import Image from "next/image";
import styles from "./page.module.scss";

import headshot from "@/public/headshot.jpeg";
// import gradient from "@/public/textures/DRS_4K_Luma Gradient_32.PNG";

import BioContent from "@/components/BioContent/BioContent";

export default function Bio() {
  return (
    <main className={`${styles.main} grid `}>
      {/* <div className={styles.bg_image_wrapper}>
        <Image
          width={1000}
          className={styles.bg_image}
          src={gradient}
          alt="DJ NHIBIT"
        />
      </div> */}
      <div className={styles.image_wrapper}>
        <Image className={styles.image} src={headshot} alt="NHIBIT headshot" />
      </div>
      <BioContent />
    </main>
  );
}
