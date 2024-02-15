"use client";
import styles from "@/components/ShowsTable/ShowRow/ShowRow.module.scss";
import { useEnableFadeTransition } from "@/hooks/useEnableFadeTransition";

type ShowRowProps = {
  city: string;
  where: string;
  when: string;
  start: string;
  end: string;
};
function ShowRow({ city, where, when, start, end }: ShowRowProps) {
  const { pageLoaded } = useEnableFadeTransition();

  return (
    <li
      className={`${styles.show} grid`}
      data-visible={pageLoaded ? "true" : "false"}
    >
      <p className={`${styles.show_info} flex`}>{city} </p>
      <p className={`${styles.show_info} flex`}>{where} </p>
      <p className={`${styles.show_info} flex`}>{when} </p>
      <div className={`${styles.show_info} ${styles.time} flex`}>
        <p>{start}-</p>
        <p>{end} </p>
      </div>
    </li>
  );
}

export default ShowRow;
