import Image from "next/image";
import styles from "./page.module.scss";
import logo from "@/public/NHIBIT_Av03-White.png";

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.padding_wrapper} grid`}>
      <section className={styles.container_1}></section>
      <section className={`${styles.logo_container} flex`}>
        <div className={`${styles.logo_wrapper} flex`}>
          {/* <div className={`${styles.logo_wrapper} ${styles.glitch} flex`}> */}
          <Image src={logo} alt={"NHIBIT logo"} className={styles.image} />
          {/* <div className={styles.glitch__layers}>
            <div className={styles.glitch__layer} />
            <div className={styles.glitch__layer} />
            <div className={styles.glitch__layer} />
          </div> */}
        </div>
      </section>
    </main>
  );
}
