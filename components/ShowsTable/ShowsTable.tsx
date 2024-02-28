import ShowRow from "@/components/ShowsTable/ShowRow/ShowRow";

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
    return (
      <p>
        No shows scheduled. For bookings contact{" "}
        <a
          href="mailto:nhibitmusic@gmail.com"
          style={{ textDecoration: "underline" }}
        >
          nhibitmusic@gmail.com
        </a>
      </p>
    );
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
