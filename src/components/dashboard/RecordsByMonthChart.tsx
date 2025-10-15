import React from "react";
import Card from "../ui/Card.tsx";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface RecordsByMonthChartProps {
  data: {
    name: string;
    births: number;
    deaths: number;
    total: number;
  }[];
  title?: string;
}

const RecordsByMonthChart: React.FC<RecordsByMonthChartProps> = ({
  data,
  title = "Records by Month",
}) => {
  return (
    <Card title={title}>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.7)",
                border: "none",
                color: "#fff",
              }}
            />
            <Legend />
            <Bar dataKey="births" name="Births" fill="#3498db" />
            <Bar dataKey="deaths" name="Deaths" fill="#e74c3c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default RecordsByMonthChart;
