import type { Release } from "@/app/(site)/music/page";
import MusicArtworkWrapper from "@/components/Music/MusicArtworkWrapper/MusicArtworkWrapper";

function ReleaseList({
  releases,
  title,
}: {
  releases: Release[];
  title: string;
}) {
  return (
    <div>
      <h2 className="subheader">{title}</h2>
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
  );
}

export default ReleaseList;
