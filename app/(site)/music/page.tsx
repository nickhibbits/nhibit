import styles from "@/app/(site)/music/page.module.scss";
import layoutStyles from "@/styles/layout.module.scss";
import creeper from "@/public/album_artwork/creeper.jpg";

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
    src: "",
    alt: "Clarity Dose 01 Artwork",
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
