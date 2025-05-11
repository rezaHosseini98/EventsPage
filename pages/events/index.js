import EventsPage from "../../src/components/events/EventsPage";
export default function Eventspage({ data }) {
  return <EventsPage data={data} />;
}

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
