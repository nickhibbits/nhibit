import Image from "next/image";
import styles from "@/components/Socials/SocialsMobile/SocialsMobile.module.scss";
import instagram from "@/public/social_icons/instagram-svgrepo-com.svg";
import soundcloud from "@/public/social_icons/soundcloud-svgrepo-com.svg";
import spotify from "@/public/social_icons/spotify-dark-svgrepo-com.svg";
import facebook from "@/public/social_icons/facebook-svgrepo-com.svg";
// import youtube from "@/public/social_icons/youtube-svgrepo-com.svg";

function SocialsMobile() {
  const height = "60";
  const width = "35";
  return (
    <div className={`${styles.socials_wrapper} flex`}>
      <a
        href="https://open.spotify.com/artist/71tcBzi4vKYIULaCMuWDbe?si=ewg7sQ7STeGl_oNZ7T9kuw"
        className={styles.a}
      >
        <Image
          height={height}
          width={width}
          src={spotify}
          alt={"spotify icon"}
          className={styles.image}
        />
      </a>
      <a
        href="https://soundcloud.com/nhibit"
        className={`${styles.a} ${styles.sc_wrapper}`}
      >
        <Image
          height={60}
          width={70}
          src={soundcloud}
          alt={"soundcloud icon"}
          className={`${styles.image} ${styles.sc_icon}`}
        />
      </a>
      <a href="https://instagram.com/nhibit" className={styles.a}>
        <Image
          height={height}
          width={width}
          src={instagram}
          alt={"instagram icon"}
          className={styles.image}
        />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61556598864095"
        className={`${styles.fb_wrapper} ${styles.a}`}
      >
        <Image
          height={60}
          width={45}
          src={facebook}
          alt={"facebook icon"}
          className={`${styles.image} ${styles.fb_icon}`}
        />
      </a>
    </div>
  );
}

export default SocialsMobile;
