import { data } from "../../utils/data/researchOnlineData";
import CustomBarChart from "../CustomBarChart";

const ResearchOnlineDetails = () => {
  return (
    <div className="card">
      <CustomBarChart data={data} />
    </div>
  );
};

export default ResearchOnlineDetails;
