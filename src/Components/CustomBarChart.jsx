import { BarChart, Bar, XAxis, YAxis, LabelList } from "recharts";

const CustomBarChart = ({ data }) => {
  return (
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
  );
};

export default CustomBarChart;
