import { BarChart, Bar, XAxis, YAxis, LabelList } from "recharts";

const data = [
  {
    name: "Positive Review",
    value: 4000,
  },
  {
    name: "Negative Review",
    value: 3000,
  },
  {
    name: "Comments",
    value: 7000,
  },
];

const ResearchOnlineDetails = () => {
  return (
    <div className="card">
      <BarChart
        width={250}
        height={150}
        data={data}
        layout="vertical"
        margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
      >
        <XAxis type="number" hide />
        <YAxis
          type="category"
          dataKey="name"
          width={100}
          fontSize="14"
          fontFamily="sans-serif"
        />
        <Bar dataKey="value" fill="#8884d8">
          <LabelList dataKey="value" position="right" />
        </Bar>
      </BarChart>
    </div>
  );
};

export default ResearchOnlineDetails;
