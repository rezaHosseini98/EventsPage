import Image from "next/image";
import Link from "next/link";
const CatEvent = ({ data, pageName }) => {
  return (
    <div className="cat-events">
      <h1>Events in {pageName}</h1>
      <div className="content">
        {data.map((ev) => (
          <Link
            className="card"
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
            passHref
          >
            <Image
              className="image"
              width={380}
              height={300}
              unoptimized
              src={ev.image}
              alt={ev.title}
            />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CatEvent;
