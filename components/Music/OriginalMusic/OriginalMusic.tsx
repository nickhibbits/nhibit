import MusicArtworkWrapper from "@/components/Music/MusicArtworkWrapper/MusicArtworkWrapper";
import creeper from "@/public/album_artwork/creeper.jpg";

const originals = [
  {
    src: creeper,
    alt: "Creeper single artwork",
    link: "https://soundcloud.com/nhibit/creeper",
  },
];

function OriginalMusic() {
  return (
    <>
      <h2 className="subheader">Originals</h2>
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
    </>
  );
}

export default OriginalMusic;
