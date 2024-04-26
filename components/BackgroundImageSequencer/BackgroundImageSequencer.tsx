import djImage from "@/public/dj_1.jpg";
import gradient from "@/public/textures/[TEXTURE[REDSTRIPE ©.jpeg";

import styles from "@/components/BackgroundImageSequencer/BackgroundImageSequencer.module.scss";
import Image from "next/image";

function BackgroundImageSequencer() {
  return (
    <>
      <div
        className={`${styles.bg_image_wrapper} ${styles.bg_image_wrapper_transition_1}`}
      >
        <Image
          width={1000}
          className={styles.bg_image}
          src={djImage}
          alt="DJ NHIBIT"
        />
      </div>
      <div
        className={`${styles.bg_image_wrapper_desktop} ${styles.bg_image_wrapper_transition_1}`}
      >
        <Image
          className={styles.bg_image_desktop}
          src={djImage}
          alt="DJ NHIBIT"
        />
      </div>
      <div
        className={`${styles.bg_image_wrapper} ${styles.bg_image_wrapper_transition_2}`}
      >
        <Image
          width={1700}
          height={1400}
          className={`${styles.bg_image} ${styles.texture}`}
          src={gradient}
          alt="texture"
        />
      </div>
      <div
        className={`${styles.bg_image_wrapper_desktop} ${styles.bg_image_wrapper_transition_2}`}
      >
        <Image
          className={` ${styles.texture_desktop} ${styles.texture}`}
          src={gradient}
          alt="texture"
        />
      </div>
    </>
  );
}

export default BackgroundImageSequencer;
