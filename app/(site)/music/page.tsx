import styles from "@/app/(site)/music/page.module.scss";
import layoutStyles from "@/styles/layout.module.scss";
import creeper from "@/public/album_artwork/creeper.jpg";
import clarityDose1 from "@/public/clarityDose_artwork/1.jpg";
import clarityDose2 from "@/public/clarityDose_artwork/2.jpg";
import clarityDose3 from "@/public/clarityDose_artwork/3.jpg";

import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import ReleaseList from "@/components/Music/ReleaseList/ReleaseList";

const originals = [
  {
    src: creeper,
    alt: "Creeper single artwork",
    link: "https://soundcloud.com/nhibit/creeper",
  },
];

const mixes = [
  {
    src: clarityDose1,
    alt: "Clarity Dose 01 Artwork",
    link: "",
  },
  {
    src: clarityDose2,
    alt: "Clarity Dose 02 Artwork",
    link: "",
  },
  {
    src: clarityDose3,
    alt: "Clarity Dose 03 Artwork",
    link: "",
  },
];

export type Release = {
  src: any;
  alt: string;
  link: string;
};

function Music() {
  return (
    <main className={`${styles.main} ${layoutStyles.padding_wrapper} grid `}>
      <BackgroundImage />
      <section className={styles.content_wrapper}>
        <h1 className={`${styles.title} header`}>Music</h1>
        <div className={`${styles.releases_wrapper} grid`}>
          <ReleaseList releases={originals} title="Originals" />
          <ReleaseList releases={mixes} title="Mixes" />
        </div>
      </section>
    </main>
  );
}

export default Music;
