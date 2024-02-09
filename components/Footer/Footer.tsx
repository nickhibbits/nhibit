import { navOptions } from "@/components/Navbars/navOptions";
import styles from "@/components/Footer/Footer.module.scss";
import layoutStyles from "@/styles/layout.module.scss";
import Link from "next/link";

function Footer() {
  return (
    <footer className={`${styles.footer} ${layoutStyles.padding_wrapper} grid`}>
      <div className={`${styles.content_wrapper} ${styles.contact_wrapper}`}>
        <h2 className={styles.title_wrapper}>CONTACT</h2>
        <p className={styles.content}>nhibitmusic@gmail.com</p>
      </div>
      <div className={`${styles.content_wrapper} ${styles.siteMap_wrapper}`}>
        <h2 className={styles.title_wrapper}>SITE MAP</h2>
        <ul className={styles.options_wrapper}>
          {navOptions.map((option, i) => {
            return (
              <li className={styles.option} key={i}>
                <Link
                  href={option.toLowerCase()}
                  className={`${styles.anchor} flex`}
                >
                  <p className={styles.content}>{option.toUpperCase()}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
