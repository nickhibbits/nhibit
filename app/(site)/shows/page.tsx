import ShowsTable from "@/components/ShowsTable/ShowsTable";
import styles from "./page.module.scss";
import layoutStyles from "@/styles/layout.module.scss";

function Shows() {
  return (
    <main className={`${styles.main} ${layoutStyles.padding_wrapper} `}>
      <section className={styles.content_wrapper}>
        <h1 className={`${styles.title} header`}>Shows</h1>
        <ShowsTable />
      </section>
    </main>
  );
}

export default Shows;
