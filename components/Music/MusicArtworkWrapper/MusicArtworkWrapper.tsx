"use client";

import Image from "next/image";

import Link from "next/link";

import styles from "./MusicArtworkWrapper.module.scss";
import { useEnableFadeTransition } from "@/hooks/useEnableFadeTransition";

type MusicArtworkWrapperProps = {
  src: any;
  alt: any;
  link: any;
};

function MusicArtworkWrapper({ src, alt, link }: MusicArtworkWrapperProps) {
  const { pageLoaded } = useEnableFadeTransition();

  const size = 300;
  return (
    <div
      className={styles.artwork_wrapper}
      data-visible={pageLoaded ? "true" : "false"}
    >
      <Link href={link}>
        <Image
          src={src}
          className={styles.image}
          alt={alt}
          height={size}
          width={size}
        />
      </Link>
    </div>
  );
}

export default MusicArtworkWrapper;
