import styles from "@/components/ShowsTable/ShowsTable.module.scss";

const shows = [
  {
    city: "South Lake Tahoe",
    where: "Heavenly Ski Resort, East Peak",
    when: "February 11, 2023",
    time: "12pm-2pm",
  },
  {
    city: "South Lake Tahoe",
    where: "Fuse Party @ American Legion",
    when: "February 17, 2023",
    time: "9:45pm-10:45pm",
  },
  {
    city: "South Lake Tahoe",
    where: "Heavenly Ski Resort, East Peak",
    when: "February 18, 2023",
    time: "12pm-2pm",
  },
  {
    city: "South Lake Tahoe",
    where: "Deep In Tahoe @ South of North Brewing",
    when: "February 18, 2023",
    time: "12pm-2pm",
  },
  {
    city: "South Lake Tahoe",
    where: "Heavenly Ski Resort, East Peak",
    when: "March 3, 2023",
    time: "12pm-2pm",
  },
  {
    city: "South Lake Tahoe",
    where: "Heavenly Ski Resort, East Peak",
    when: "March 10, 2023",
    time: "12pm-2pm",
  },
];

function ShowsTable() {
  return (
    <ul className={styles.shows_table_wrapper}>
      {shows.map((show, i) => {
        return (
          <li className={`${styles.show} grid`}>
            <p className={`${styles.show_info} flex`}>{show.city}</p>
            <p className={`${styles.show_info} flex`}>{show.where}</p>
            <p className={`${styles.show_info} flex`}>{show.when}</p>
            <p className={`${styles.show_info} flex`}>{show.time}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default ShowsTable;
