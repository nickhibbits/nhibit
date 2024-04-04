import ShowRow from "@/components/ShowsTable/ShowRow/ShowRow";
import { useEnableFadeTransition } from "@/hooks/useEnableFadeTransition";
import styles from "./ShowsTable.module.scss";
import NoShowsMessage from "@/components/ShowsTable/NoShowsMessage/NoShowsMessage";

const shows: any[] = [
  // {
  //   city: "S Lake Tahoe",
  //   where: "Heavenly Ski Resort @ East Peak",
  //   when: "3/3/23",
  //   start: "12pm",
  //   end: "2pm",
  // },
  // {
  //   city: "S Lake Tahoe",
  //   where: "Heavenly Ski Resort @ East Peak",
  //   when: "3/10/23",
  //   start: "12pm",
  //   end: "2pm",
  // },
];

function ShowsTable() {
  if (shows.length === 0) {
    return <NoShowsMessage />;
  } else {
    return (
      <ul>
        {shows.map((show, i) => {
          return (
            <ShowRow
              city={show.city}
              where={show.where}
              when={show.when}
              start={show.start}
              end={show.end}
            />
          );
        })}
      </ul>
    );
  }
}

export default ShowsTable;
