import ResearchOnlineDetails from "./Details/ResearchOnlineDetails";

export default function CardNode({ data }) {
  switch (data.detail) {
    case "research":
      return <ResearchOnlineDetails />;

    case "b2c-online":
      return <ResearchOnlineDetails />;

    default:
      return <div className="card">No Data</div>;
  }
}
