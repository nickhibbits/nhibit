import styles from "./page.module.scss";
import layoutStyles from "@/styles/layout.module.scss";

function Blog() {
  return (
    <main className={`${styles.main} ${layoutStyles.padding_wrapper}`}>
      <section className={styles.container}>Blog</section>
    </main>
  );
}

export default Blog;
