import Image from "next/image";
import styles from "@/components/Socials/Socials.module.scss";
import instagram from "@/public/social_icons/instagram-svgrepo-com.svg";
import soundcloud from "@/public/social_icons/soundcloud-svgrepo-com.svg";
import spotify from "@/public/social_icons/spotify-dark-svgrepo-com.svg";
import youtube from "@/public/social_icons/youtube-svgrepo-com.svg";

function Socials() {
  const height = "50";
  const width = "50";
  return (
    <div className={`${styles.socials_wrapper} flex`}>
      <Image
        height={height}
        width={width}
        src={spotify}
        alt={"spotify icon"}
        className={styles.image}
      />
      <Image
        height={height}
        width={width}
        src={soundcloud}
        alt={"soundcloud icon"}
        className={styles.image}
      />
      <Image
        height={height}
        width={width}
        src={instagram}
        alt={"instagram icon"}
        className={styles.image}
      />
      <Image
        height={height}
        width={width}
        src={youtube}
        alt={"youtube icon"}
        className={styles.image}
      />
    </div>
  );
}

export default Socials;
