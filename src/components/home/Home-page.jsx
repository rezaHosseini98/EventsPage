import Image from "next/image";
import Link from "next/link";

export const HomePage = ({ data }) => (
  <div className="home-body">
    {data.map((ev) => (
      <Link className="card" passHref key={ev.id} href={`/events/${ev.id}`}>
        <Image
          className="image"
          alt={ev.title}
          width={600}
          height={400}
          src={ev.image}
          unoptimized
        />
        <div className="content">
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </div>
      </Link>
    ))}
  </div>
);
