import ShowRow from "@/components/ShowsTable/ShowRow/ShowRow";

const shows = [
  {
    city: "S Lake Tahoe",
    where: "Heavenly Ski Resort @ East Peak",
    when: "2/11/23",
    start: "12pm",
    end: "2pm",
  },
  {
    city: "S Lake Tahoe",
    where: "Heavenly Ski Resort @ East Peak",
    when: "2/18/23",
    start: "12pm",
    end: "2pm",
  },
  {
    city: "S Lake Tahoe",
    where: "Deep In Tahoe @ South of North Brewing",
    when: "2/18/23",
    start: "12pm",
    end: "2pm",
  },
  {
    city: "S Lake Tahoe",
    where: "Heavenly Ski Resort @ East Peak",
    when: "3/3/23",
    start: "12pm",
    end: "2pm",
  },
  {
    city: "S Lake Tahoe",
    where: "Heavenly Ski Resort @ East Peak",
    when: "3/10/23",
    start: "12pm",
    end: "2pm",
  },
];

function ShowsTable() {
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

export default ShowsTable;
