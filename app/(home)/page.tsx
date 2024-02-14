"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import logo from "@/public/NHIBIT_Av03-White.png";
import Socials from "@/components/Socials/Socials";
import djImage from "@/public/dj_1.jpg";
import { useEnableFadeTransition } from "@/app/hooks/useEnableFadeTransition";

export default function Home() {
  const { pageLoaded } = useEnableFadeTransition();

  return (
    <main className={`${styles.main} flex `}>
      <div className={styles.bg_image_wrapper}>
        <Image
          width={1000}
          className={styles.bg_image}
          src={djImage}
          alt="DJ NHIBIT"
        />
      </div>
      <div className={styles.bg_image_wrapper_desktop}>
        <Image
          className={styles.bg_image_desktop}
          src={djImage}
          alt="DJ NHIBIT"
        />
      </div>
      <div
        className={`${styles.content_wrapper} ${styles.padding_wrapper} flex`}
      >
        <section
          className={`${styles.logo_container} flex`}
          data-visible={pageLoaded ? "true" : "false"}
        >
          <div className={`${styles.logo_wrapper} flex`}>
            <Image src={logo} alt={"NHIBIT logo"} className={styles.image} />
          </div>
          <Socials />
        </section>
      </div>
    </main>
  );
}
