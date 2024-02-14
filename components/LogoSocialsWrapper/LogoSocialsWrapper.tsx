"use client";

import { useEnableFadeTransition } from "@/app/hooks/useEnableFadeTransition";

import Image from "next/image";
import logo from "@/public/NHIBIT_Av03-White.png";
import Socials from "@/components/Socials/Socials";

import styles from "@/components/LogoSocialsWrapper/LogoSocialsWrapper.module.scss";

function LogoSocialsWrapper() {
  const { pageLoaded } = useEnableFadeTransition();

  return (
    <section
      className={`${styles.logo_container} flex`}
      data-visible={pageLoaded ? "true" : "false"}
    >
      <div className={`${styles.logo_wrapper} flex`}>
        <Image src={logo} alt={"NHIBIT logo"} className={styles.image} />
      </div>
      <Socials />
    </section>
  );
}

export default LogoSocialsWrapper;
