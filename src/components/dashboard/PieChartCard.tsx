import React from "react";
import Card from "../ui/Card.tsx";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface PieChartCardProps {
  data: { name: string; value: number; fill?: string }[];
  title: string;
  showLabelLine?: boolean;
}

const PieChartCard: React.FC<PieChartCardProps> = ({
  data,
  title,
  showLabelLine = true,
}) => {
  return (
    <Card title={title}>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={showLabelLine}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill || `hsl(${index * 30}, 70%, 50%)`}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.7)",
                border: "none",
                color: "#fff",
              }}
              formatter={(value) => [value, "Records"]}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default PieChartCard;
