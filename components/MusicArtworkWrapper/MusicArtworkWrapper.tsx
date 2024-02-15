"use client";

import Image from "next/image";
import creeper from "@/public/album_artwork/creeper.jpg";
import Link from "next/link";

import styles from "@/components/MusicArtworkWrapper/MusicArtworkWrapper.module.scss";
import { useEnableFadeTransition } from "@/hooks/useEnableFadeTransition";

function MusicArtworkWrapper() {
  const { pageLoaded } = useEnableFadeTransition();

  const size = 300;
  return (
    <div
      className={styles.artwork_wrapper}
      data-visible={pageLoaded ? "true" : "false"}
    >
      <Link href={"https://soundcloud.com/nhibit/creeper"}>
        <Image
          src={creeper}
          className={styles.image}
          alt="Creeper single artwork"
          height={size}
          width={size}
        />
      </Link>
    </div>
  );
}

export default MusicArtworkWrapper;
