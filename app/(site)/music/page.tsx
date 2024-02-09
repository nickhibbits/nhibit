import styles from "@/app/(site)/music/page.module.scss";
import layoutStyles from "@/styles/layout.module.scss";
import Image from "next/image";
import creeper from "@/public/album_artwork/creeper.jpg";
import Link from "next/link";

function Music() {
  const size = 300;

  return (
    <main className={`${styles.main} ${layoutStyles.padding_wrapper} grid `}>
      <section className={styles.content_wrapper}>
        <h1 className={`${styles.title} header`}>Music</h1>
        <div className={styles.artwork_wrapper}>
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
      </section>
    </main>
  );
}

export default Music;
