import ShowsTable from "@/components/ShowsTable/ShowsTable";
import styles from "./page.module.scss";
import layoutStyles from "@/styles/layout.module.scss";
import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";

function Shows() {
  return (
    <main className={`${styles.main}  `}>
      <BackgroundImage />
      <section
        className={`${styles.content_wrapper} ${layoutStyles.padding_wrapper}`}
      >
        <h1 className={`${styles.title} header`}>Shows</h1>
        <ShowsTable />
      </section>
    </main>
  );
}

export default Shows;
