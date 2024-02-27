import Image from "next/image";
import gradient from "@/public/textures/DRS_Distressed_MOBILE_02.JPG";
import styles from "./BackgroundImage.module.scss";
function BackgroundImage() {
  return (
    <Image
      className={styles.bg_image}
      src={gradient}
      alt="gradient background"
    />
  );
}

export default BackgroundImage;
