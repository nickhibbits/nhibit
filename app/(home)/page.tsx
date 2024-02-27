import Image from "next/image";
import styles from "./page.module.scss";

import djImage from "@/public/dj_1.jpg";
// import gradient from "@/public/textures/DRS_4K_Luma Gradient_32.PNG";
import LogoSocialsWrapper from "@/components/LogoSocialsWrapper/LogoSocialsWrapper";

export default function Home() {
  return (
    <main className={`${styles.main} flex `}>
      <div className={styles.bg_image_wrapper}>
        <Image
          width={1000}
          className={styles.bg_image}
          src={djImage}
          alt="DJ NHIBIT"
        />
      </div>
      <div className={styles.bg_image_wrapper_desktop}>
        <Image
          className={styles.bg_image_desktop}
          src={djImage}
          alt="DJ NHIBIT"
        />
      </div>
      <div
        className={`${styles.content_wrapper} ${styles.padding_wrapper} flex`}
      >
        <LogoSocialsWrapper />
      </div>
    </main>
  );
}
