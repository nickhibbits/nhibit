import styles from "@/app/(site)/music/page.module.scss";
import layoutStyles from "@/styles/layout.module.scss";
import MusicArtworkWrapper from "@/components/MusicArtworkWrapper/MusicArtworkWrapper";

import creeper from "@/public/album_artwork/creeper.jpg";
import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";

const originals = [
  {
    src: creeper,
    alt: "Creeper single artwork",
    link: "https://soundcloud.com/nhibit/creeper",
  },
];

function Music() {
  return (
    <main className={`${styles.main} ${layoutStyles.padding_wrapper} grid `}>
      <BackgroundImage />
      <section className={styles.content_wrapper}>
        <h1 className={`${styles.title} header`}>Music</h1>
        {originals.map((original, i) => {
          return (
            <MusicArtworkWrapper
              src={original.src}
              alt={original.alt}
              link={original.link}
              key={i}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Music;
