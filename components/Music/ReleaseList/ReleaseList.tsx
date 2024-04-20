import type { Release } from "@/app/(site)/music/page";
import MusicArtworkWrapper from "@/components/Music/MusicArtworkWrapper/MusicArtworkWrapper";
import styles from "@/components/Music/ReleaseList/ReleaseList.module.scss";

function ReleaseList({
  releases,
  title,
}: {
  releases: Release[];
  title: string;
}) {
  return (
    <div className={styles.release_list}>
      <h2 className={`${styles.list_title} subheader`}>{title}</h2>
      <div className={`${styles.release_list_wrapper} flex`}>
        {releases.map((release, i) => {
          return (
            <MusicArtworkWrapper
              src={release.src}
              alt={release.alt}
              link={release.link}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ReleaseList;
