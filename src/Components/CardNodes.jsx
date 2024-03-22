import Designing from "./Details/Designing";
import Planning from "./Details/Planning";
import Research from "./Details/Research";
import ResearchOnlineDetails from "./Details/ResearchOnlineDetails";

export default function CardNode({ data }) {
  switch (data.detail) {
    case "research":
      return <Research />;

    case "planning":
      return <Planning />;

    case "designing":
      return <Designing />;

    case "b2c-online":
      return <ResearchOnlineDetails />;

    default:
      return <div className="card">No Data</div>;
  }
}
