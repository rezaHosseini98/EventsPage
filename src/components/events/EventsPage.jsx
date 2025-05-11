import Image from "next/image";
import Link from "next/link";
const EventsPage = ({ data }) => {
  return (
    <div className="events-page">
      {data.map((ev) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
          <Image
            className="image"
            src={ev.image}
            alt={ev.title}
            width={400}
            height={400}
            unoptimized
          />
          <h2>{ev.title}</h2>
        </Link>
      ))}
    </div>
  );
};
export default EventsPage;
